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
        mongoose.connect(process.env.MONGODB_URL);
        typescript_rest_1.Server.setFileDest('/uploads');
        typescript_rest_1.Server.buildServices(app);
        app.listen(3000, function () {
            console.log('Rest Server listening on port 3000!');
        });
    };
    return Api_Module;
}());
exports.Api_Module = Api_Module;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9BcGlfTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLE9BQU8sV0FBTSxTQUN6QixDQUFDLENBRGlDO0FBQ2xDLGdDQUF1QixpQkFFdkIsQ0FBQyxDQUZ1QztBQUV4QyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUU1QjtJQUFBO0lBV0EsQ0FBQztJQVZVLGdCQUFLLEdBQVo7UUFDSSxJQUFJLEdBQUcsR0FBd0IsT0FBTyxFQUFFLENBQUM7UUFDekMsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25DLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxQyx3QkFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQix3QkFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxpQkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWHFCLGtCQUFVLGFBVy9CLENBQUEiLCJmaWxlIjoiYXBpL0FwaV9Nb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICd0eXBlc2NyaXB0LXJlc3QnXG5cbnJlcXVpcmUoJy4vdjEvQXBpX0NvdXJzZXMnKTtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFwaV9Nb2R1bGUge1xuICAgIHN0YXRpYyBzZXJ2ZSgpIHtcbiAgICAgICAgbGV0IGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbiA9IGV4cHJlc3MoKTtcbiAgICAgICAgbGV0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcbiAgICAgICAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSTCk7XG4gICAgICAgIFNlcnZlci5zZXRGaWxlRGVzdCgnL3VwbG9hZHMnKTtcbiAgICAgICAgU2VydmVyLmJ1aWxkU2VydmljZXMoYXBwKTtcbiAgICAgICAgYXBwLmxpc3RlbigzMDAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXN0IFNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAzMDAwIScpO1xuICAgICAgICB9KTtcbiAgICB9XG59Il19
