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
        var port = process.env.PORT || 3000;
        mongoose.connect(process.env.MONGODB_URL);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9BcGlfTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLE9BQU8sV0FBTSxTQUN6QixDQUFDLENBRGlDO0FBQ2xDLElBQVksSUFBSSxXQUFPLE1BQ3ZCLENBQUMsQ0FENEI7QUFDN0IsZ0NBQXVCLGlCQUV2QixDQUFDLENBRnVDO0FBRXhDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRTVCO0lBQUE7SUFhQSxDQUFDO0lBWlUsZ0JBQUssR0FBWjtRQUNJLElBQUksR0FBRyxHQUF3QixPQUFPLEVBQUUsQ0FBQztRQUN6QyxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO1FBQ3BDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDaEIsd0JBQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0Isd0JBQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3pELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFicUIsa0JBQVUsYUFhL0IsQ0FBQSIsImZpbGUiOiJhcGkvQXBpX01vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcclxuaW1wb3J0ICogYXMgY29ycyAgZnJvbSAnY29ycydcclxuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAndHlwZXNjcmlwdC1yZXN0J1xyXG5cclxucmVxdWlyZSgnLi92MS9BcGlfQ291cnNlcycpO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFwaV9Nb2R1bGUge1xyXG4gICAgc3RhdGljIHNlcnZlKCkge1xyXG4gICAgICAgIGxldCBhcHA6IGV4cHJlc3MuQXBwbGljYXRpb24gPSBleHByZXNzKCk7XHJcbiAgICAgICAgbGV0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcclxuICAgICAgICBsZXQgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcclxuICAgICAgICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJMKTtcclxuICAgICAgICBhcHAudXNlKGNvcnMoKSk7XHJcbiAgICAgICAgU2VydmVyLnNldEZpbGVEZXN0KCcvdXBsb2FkcycpO1xyXG4gICAgICAgIFNlcnZlci5idWlsZFNlcnZpY2VzKGFwcCk7XHJcbiAgICAgICAgYXBwLmxpc3Rlbihwb3J0LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3QgU2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICcgKyBwb3J0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==
