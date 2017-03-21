"use strict";
var express = require('express');
var typescript_rest_1 = require('typescript-rest');
require('./v1/Api_Courses');
var Api_Module = (function () {
    function Api_Module() {
    }
    Api_Module.serve = function () {
        var app = express();
        var mongoose = require('mongoose');
        //mongoose.connect(process.env.MONGODB_URL);
        typescript_rest_1.Server.setFileDest('/uploads');
        typescript_rest_1.Server.buildServices(app);
        app.use(function (req, res, next) {
            res.json(req);
        });
        app.listen(3000, function () {
            console.log('Rest Server listening on port 3000!');
        });
    };
    return Api_Module;
}());
exports.Api_Module = Api_Module;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9BcGlfTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLE9BQU8sV0FBTSxTQUN6QixDQUFDLENBRGlDO0FBQ2xDLGdDQUF1QixpQkFFdkIsQ0FBQyxDQUZ1QztBQUV4QyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUU1QjtJQUFBO0lBY0EsQ0FBQztJQWJVLGdCQUFLLEdBQVo7UUFDSSxJQUFJLEdBQUcsR0FBd0IsT0FBTyxFQUFFLENBQUM7UUFDekMsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25DLDRDQUE0QztRQUM1Qyx3QkFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQix3QkFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCO1lBQzVFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxpQkFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZHFCLGtCQUFVLGFBYy9CLENBQUEiLCJmaWxlIjoiYXBpL0FwaV9Nb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXHJcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJ3R5cGVzY3JpcHQtcmVzdCdcclxuXHJcbnJlcXVpcmUoJy4vdjEvQXBpX0NvdXJzZXMnKTtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBcGlfTW9kdWxlIHtcclxuICAgIHN0YXRpYyBzZXJ2ZSgpIHtcclxuICAgICAgICBsZXQgYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uID0gZXhwcmVzcygpO1xyXG4gICAgICAgIGxldCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XHJcbiAgICAgICAgLy9tb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJMKTtcclxuICAgICAgICBTZXJ2ZXIuc2V0RmlsZURlc3QoJy91cGxvYWRzJyk7XHJcbiAgICAgICAgU2VydmVyLmJ1aWxkU2VydmljZXMoYXBwKTtcclxuICAgICAgICBhcHAudXNlKChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gICAgICAgICAgICByZXMuanNvbihyZXEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFwcC5saXN0ZW4oMzAwMCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXN0IFNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAzMDAwIScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19
