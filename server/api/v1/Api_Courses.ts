import { Path, Context, ServiceContext, GET, PathParam } from 'typescript-rest'
import { Document } from 'mongoose'

let Course = require('./models/Model_Course');

@Path('/api/v1/courses')
abstract class Api_Courses {
    @Context
    context: ServiceContext;

    @GET
    getList() {
        return new Promise<Document[]>((resolve, reject) => {
            Course.find({}, {_id: false}, (err: Error, data: Document[]) => {
                if (!err) resolve(data);
            });
        });
    }

    @GET
    @Path(':name')
    get( @PathParam('name') name: string) {
        return new Promise<Document>((resolve, reject) => {
            Course.find({name: name}, {_id: false}, (err: Error, data: Document) => {
                if (!err) resolve(data);
            });
        });
    }
}