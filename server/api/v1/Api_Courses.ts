import { Path, Context, ServiceContext, GET, PathParam, PUT, POST, DELETE } from 'typescript-rest'
import { Document, Model } from 'mongoose'
import { Commons_Error } from '../../commons/Commons_Error'

let Course: Model<Document> = require('./models/Model_Course').model;
let validation = require('./models/Model_Course').validation;

@Path('/api/v1/courses')
abstract class Api_Courses {
    @Context
    context: ServiceContext;

    @GET
    getList() {
        return new Promise<Document[]>((resolve, reject) => {
            Course.find({}, {_id: false}, (err: Error, data: Document[]) => {
                if (data && !err) resolve(data);
                else Commons_Error.notFound(this.context);
            });
        });
    }

    @GET @Path(':name')
    get( @PathParam('name') name: string) {
        return new Promise<Document>((resolve, reject) => {
            Course.findOne({name: name}, {_id: false}, (err: Error, data: Document) => {
                if (data && !err) resolve(data);
                else Commons_Error.notFound(this.context);
            });
        });
    }

    @PUT @Path(':name')
    put( @PathParam('name') name: string, data: Object) {
        return new Promise<Document>((resolve, reject) => {
            Course.update({name: name, isPredefined: false}, data, {runValidators: true},
            (err: Error, output: any) => {
                if (!err) this.context.response.json(output);
                else Commons_Error.badRequest(this.context, err);
            });
        });
    }

    @POST
    post(data: Object) {
        return new Promise<Document>((resolve, reject) => {
            let course = new Course(data);
            course.set('isPredefined', false);
            course.save((err: Error, output: any) => {
                if (!err) this.context.response.json(output);
                else Commons_Error.badRequest(this.context, err);
            });
        });
    }

    @DELETE @Path(':name')
    delete( @PathParam('name') name: string) {
        return new Promise<Document>((resolve, reject) => {
            Course.findOne({name: name}, (err: Error, data: Document) => {
                if (data && !err) {
                    let course = new Course(data);
                    if (course.get('isPredefined')) {
                        Commons_Error.badRequest(this.context, {
                            status: 400,
                            message: validation.isPredefined.persistent
                        });
                    } else {
                        course.remove((err: Error) => {
                            if (err) Commons_Error.badRequest(this.context, err);
                            else this.context.response.json({
                                status: 200,
                                message: 'document deleted'
                            });
                        });
                    }
                }
                else Commons_Error.notFound(this.context);
            });
        });
    }
}