import * as express from 'express'
import * as cors  from 'cors'
import { Server } from 'typescript-rest'

require('./v1/Api_Courses');

export abstract class Api_Module {
    static serve() {
        let app: express.Application = express();
        let mongoose = require('mongoose');
        let port = process.env['port::deamon'] || 3000;
        mongoose.connect(process.env['mongo::deamon']);
        app.use(cors());
        Server.setFileDest('/uploads');
        Server.buildServices(app);
        app.listen(port, function() {
            console.log('Rest Server listening on port ' + port);
        });
    }
}