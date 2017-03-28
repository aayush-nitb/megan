"use strict";
var express = require('express');
var cors = require('cors');
var typescript_rest_1 = require('typescript-rest');
require('./v1/Api_Courses');
var Api_Module = (function () {
    function Api_Module() {
    }
    Api_Module.serve = function () {
        var app = express();
        var mongoose = require('mongoose');
        var port = process.env['port::deamon'] || 3000;
        mongoose.connect(process.env['mongo::deamon']);
        app.use(cors());
        typescript_rest_1.Server.setFileDest('/uploads');
        typescript_rest_1.Server.buildServices(app);
        app.listen(port, function () {
            console.log('Rest Server listening on port ' + port);
        });
    };
    return Api_Module;
}());
exports.Api_Module = Api_Module;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9BcGlfTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLE9BQU8sV0FBTSxTQUN6QixDQUFDLENBRGlDO0FBQ2xDLElBQVksSUFBSSxXQUFPLE1BQ3ZCLENBQUMsQ0FENEI7QUFDN0IsZ0NBQXVCLGlCQUV2QixDQUFDLENBRnVDO0FBRXhDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRTVCO0lBQUE7SUFhQSxDQUFDO0lBWlUsZ0JBQUssR0FBWjtRQUNJLElBQUksR0FBRyxHQUF3QixPQUFPLEVBQUUsQ0FBQztRQUN6QyxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDL0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDL0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLHdCQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9CLHdCQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxpQkFBQztBQUFELENBYkEsQUFhQyxJQUFBO0FBYnFCLGtCQUFVLGFBYS9CLENBQUEiLCJmaWxlIjoiYXBpL0FwaV9Nb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXHJcbmltcG9ydCAqIGFzIGNvcnMgIGZyb20gJ2NvcnMnXHJcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJ3R5cGVzY3JpcHQtcmVzdCdcclxuXHJcbnJlcXVpcmUoJy4vdjEvQXBpX0NvdXJzZXMnKTtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBcGlfTW9kdWxlIHtcclxuICAgIHN0YXRpYyBzZXJ2ZSgpIHtcclxuICAgICAgICBsZXQgYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uID0gZXhwcmVzcygpO1xyXG4gICAgICAgIGxldCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XHJcbiAgICAgICAgbGV0IHBvcnQgPSBwcm9jZXNzLmVudlsncG9ydDo6ZGVhbW9uJ10gfHwgMzAwMDtcclxuICAgICAgICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Wydtb25nbzo6ZGVhbW9uJ10pO1xyXG4gICAgICAgIGFwcC51c2UoY29ycygpKTtcclxuICAgICAgICBTZXJ2ZXIuc2V0RmlsZURlc3QoJy91cGxvYWRzJyk7XHJcbiAgICAgICAgU2VydmVyLmJ1aWxkU2VydmljZXMoYXBwKTtcclxuICAgICAgICBhcHAubGlzdGVuKHBvcnQsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzdCBTZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJyArIHBvcnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19
