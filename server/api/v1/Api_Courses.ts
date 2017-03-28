import { Path, Context, ServiceContext, GET, PathParam, PUT } from 'typescript-rest'
import { Document, Model } from 'mongoose'
import { Commons_Error } from '../../commons/Commons_Error'

let Course: Model<Document> = require('./models/Model_Course');

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
            Course.update({name: name, isPredefined: false}, data, {runValidators: true}, (err: Error, count: number) => {
                if (count && !err) this.context.response.json({
                    status: 200,
                    message: 'document updated'
                });
                else Commons_Error.badRequest(this.context, err);
            });
        });
    }
}