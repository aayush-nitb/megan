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
        var port = process.env.PORT || 3000;
        mongoose.connect(process.env.MONGODB_URL);
        typescript_rest_1.Server.setFileDest('/uploads');
        typescript_rest_1.Server.buildServices(app);
        app.listen(port, function () {
            console.log('Rest Server listening on port ' + port);
        });
    };
    return Api_Module;
}());
exports.Api_Module = Api_Module;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9BcGlfTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLE9BQU8sV0FBTSxTQUN6QixDQUFDLENBRGlDO0FBQ2xDLGdDQUF1QixpQkFFdkIsQ0FBQyxDQUZ1QztBQUV4QyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUU1QjtJQUFBO0lBWUEsQ0FBQztJQVhVLGdCQUFLLEdBQVo7UUFDSSxJQUFJLEdBQUcsR0FBd0IsT0FBTyxFQUFFLENBQUM7UUFDekMsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25DLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztRQUNwQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUMsd0JBQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0Isd0JBQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3pELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFacUIsa0JBQVUsYUFZL0IsQ0FBQSIsImZpbGUiOiJhcGkvQXBpX01vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcclxuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAndHlwZXNjcmlwdC1yZXN0J1xyXG5cclxucmVxdWlyZSgnLi92MS9BcGlfQ291cnNlcycpO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFwaV9Nb2R1bGUge1xyXG4gICAgc3RhdGljIHNlcnZlKCkge1xyXG4gICAgICAgIGxldCBhcHA6IGV4cHJlc3MuQXBwbGljYXRpb24gPSBleHByZXNzKCk7XHJcbiAgICAgICAgbGV0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcclxuICAgICAgICBsZXQgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcclxuICAgICAgICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJMKTtcclxuICAgICAgICBTZXJ2ZXIuc2V0RmlsZURlc3QoJy91cGxvYWRzJyk7XHJcbiAgICAgICAgU2VydmVyLmJ1aWxkU2VydmljZXMoYXBwKTtcclxuICAgICAgICBhcHAubGlzdGVuKHBvcnQsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzdCBTZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJyArIHBvcnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19
