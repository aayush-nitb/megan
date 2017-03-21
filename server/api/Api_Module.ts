import * as express from 'express'
import { Server } from 'typescript-rest'

//require('./v1/Api_Courses');

export abstract class Api_Module {
    static serve() {
        let app: express.Application = express();
        let mongoose = require('mongoose');
        let port = process.env.PORT || 3000;
        //mongoose.connect(process.env.MONGODB_URL);
        //Server.setFileDest('/uploads');
        //Server.buildServices(app);
        app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
            res.json(req);
        });
        app.listen(port, function() {
            console.log('Rest Server listening on port ' + port);
        });
    }
}