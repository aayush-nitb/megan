"use strict";
var express = require('express');
//require('./v1/Api_Courses');
var Api_Module = (function () {
    function Api_Module() {
    }
    Api_Module.serve = function () {
        var app = express();
        var mongoose = require('mongoose');
        var port = process.env.PORT || 3000;
        //mongoose.connect(process.env.MONGODB_URL);
        //Server.setFileDest('/uploads');
        //Server.buildServices(app);
        app.use(function (req, res, next) {
            res.json(req);
        });
        app.listen(port, function () {
            console.log('Rest Server listening on port ' + port);
        });
    };
    return Api_Module;
}());
exports.Api_Module = Api_Module;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9BcGlfTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLE9BQU8sV0FBTSxTQUN6QixDQUFDLENBRGlDO0FBR2xDLDhCQUE4QjtBQUU5QjtJQUFBO0lBZUEsQ0FBQztJQWRVLGdCQUFLLEdBQVo7UUFDSSxJQUFJLEdBQUcsR0FBd0IsT0FBTyxFQUFFLENBQUM7UUFDekMsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25DLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztRQUNwQyw0Q0FBNEM7UUFDNUMsaUNBQWlDO1FBQ2pDLDRCQUE0QjtRQUM1QixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCO1lBQzVFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZxQixrQkFBVSxhQWUvQixDQUFBIiwiZmlsZSI6ImFwaS9BcGlfTW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xyXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICd0eXBlc2NyaXB0LXJlc3QnXHJcblxyXG4vL3JlcXVpcmUoJy4vdjEvQXBpX0NvdXJzZXMnKTtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBcGlfTW9kdWxlIHtcclxuICAgIHN0YXRpYyBzZXJ2ZSgpIHtcclxuICAgICAgICBsZXQgYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uID0gZXhwcmVzcygpO1xyXG4gICAgICAgIGxldCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XHJcbiAgICAgICAgbGV0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XHJcbiAgICAgICAgLy9tb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJMKTtcclxuICAgICAgICAvL1NlcnZlci5zZXRGaWxlRGVzdCgnL3VwbG9hZHMnKTtcclxuICAgICAgICAvL1NlcnZlci5idWlsZFNlcnZpY2VzKGFwcCk7XHJcbiAgICAgICAgYXBwLnVzZSgocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgcmVzLmpzb24ocmVxKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhcHAubGlzdGVuKHBvcnQsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzdCBTZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJyArIHBvcnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19
