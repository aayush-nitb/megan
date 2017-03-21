import * as express from 'express'
import { Server } from 'typescript-rest'

require('./v1/Api_Courses');

export abstract class Api_Module {
    static serve() {
        let app: express.Application = express();
        let mongoose = require('mongoose');
        //mongoose.connect(process.env.MONGODB_URL);
        Server.setFileDest('/uploads');
        Server.buildServices(app);
        app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
            res.json(req);
        });
        app.listen(3000, function() {
            console.log('Rest Server listening on port 3000!');
        });
    }
}