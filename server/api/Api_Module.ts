import * as express from 'express'
import * as cors  from 'cors'
import { Server } from 'typescript-rest'

require('./v1/Api_Courses');

export abstract class Api_Module {
    static serve() {
        let app: express.Application = express();
        let mongoose = require('mongoose');
        let port = process.env.PORT || 3000;
        mongoose.connect(process.env.MONGODB_URL);
        app.use(cors());
        Server.setFileDest('/uploads');
        Server.buildServices(app);
        app.listen(port, function() {
            console.log('Rest Server listening on port ' + port);
        });
    }
}