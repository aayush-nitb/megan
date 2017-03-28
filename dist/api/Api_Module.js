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
        mongoose.connect(process.env['mongo::megan']);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9BcGlfTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLE9BQU8sV0FBTSxTQUN6QixDQUFDLENBRGlDO0FBQ2xDLElBQVksSUFBSSxXQUFPLE1BQ3ZCLENBQUMsQ0FENEI7QUFDN0IsZ0NBQXVCLGlCQUN2QixDQUFDLENBRHVDO0FBR3hDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRTVCO0lBQUE7SUFhQSxDQUFDO0lBWlUsZ0JBQUssR0FBWjtRQUNJLElBQUksR0FBRyxHQUF3QixPQUFPLEVBQUUsQ0FBQztRQUN6QyxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO1FBQ3BDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQzlDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNoQix3QkFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQix3QkFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQTtBQWJxQixrQkFBVSxhQWEvQixDQUFBIiwiZmlsZSI6ImFwaS9BcGlfTW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xyXG5pbXBvcnQgKiBhcyBjb3JzICBmcm9tICdjb3JzJ1xyXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICd0eXBlc2NyaXB0LXJlc3QnXHJcbmltcG9ydCB7IENvbW1vbnNfRXJyb3IgfSBmcm9tICcuLi9jb21tb25zL0NvbW1vbnNfRXJyb3InXHJcblxyXG5yZXF1aXJlKCcuL3YxL0FwaV9Db3Vyc2VzJyk7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQXBpX01vZHVsZSB7XHJcbiAgICBzdGF0aWMgc2VydmUoKSB7XHJcbiAgICAgICAgbGV0IGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbiA9IGV4cHJlc3MoKTtcclxuICAgICAgICBsZXQgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xyXG4gICAgICAgIGxldCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xyXG4gICAgICAgIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnZbJ21vbmdvOjptZWdhbiddKTtcclxuICAgICAgICBhcHAudXNlKGNvcnMoKSk7XHJcbiAgICAgICAgU2VydmVyLnNldEZpbGVEZXN0KCcvdXBsb2FkcycpO1xyXG4gICAgICAgIFNlcnZlci5idWlsZFNlcnZpY2VzKGFwcCk7XHJcbiAgICAgICAgYXBwLmxpc3Rlbihwb3J0LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3QgU2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICcgKyBwb3J0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==
