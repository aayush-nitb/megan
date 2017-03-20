"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var typescript_rest_1 = require('typescript-rest');
var Course = require('./models/Model_Course');
var Api_Courses = (function () {
    function Api_Courses() {
    }
    Api_Courses.prototype.getList = function () {
        return new Promise(function (resolve, reject) {
            Course.find({}, { _id: false }, function (err, data) {
                if (!err)
                    resolve(data);
            });
        });
    };
    Api_Courses.prototype.get = function (name) {
        return new Promise(function (resolve, reject) {
            Course.find({ name: name }, { _id: false }, function (err, data) {
                if (!err)
                    resolve(data);
            });
        });
    };
    __decorate([
        typescript_rest_1.Context, 
        __metadata('design:type', typescript_rest_1.ServiceContext)
    ], Api_Courses.prototype, "context", void 0);
    __decorate([
        typescript_rest_1.GET, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], Api_Courses.prototype, "getList", null);
    __decorate([
        typescript_rest_1.GET,
        typescript_rest_1.Path(':name'),
        __param(0, typescript_rest_1.PathParam('name')), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [String]), 
        __metadata('design:returntype', void 0)
    ], Api_Courses.prototype, "get", null);
    Api_Courses = __decorate([
        typescript_rest_1.Path('/api/v1/courses'), 
        __metadata('design:paramtypes', [])
    ], Api_Courses);
    return Api_Courses;
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS92MS9BcGlfQ291cnNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsZ0NBQThELGlCQUM5RCxDQUFDLENBRDhFO0FBRy9FLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBRzlDO0lBQUE7SUFzQkEsQ0FBQztJQWpCRyw2QkFBTyxHQUFQO1FBQ0ksTUFBTSxDQUFDLElBQUksT0FBTyxDQUFhLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDM0MsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFDLEVBQUUsVUFBQyxHQUFVLEVBQUUsSUFBZ0I7Z0JBQ3ZELEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO29CQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUlELHlCQUFHLEdBQUgsVUFBd0IsSUFBWTtRQUNoQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQVcsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFFLEtBQUssRUFBQyxFQUFFLFVBQUMsR0FBVSxFQUFFLElBQWM7Z0JBQy9ELEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO29CQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXBCRDtRQUFDLHlCQUFPOztnREFBQTtJQUdSO1FBQUMscUJBQUc7Ozs7OENBQUE7SUFTSjtRQUFDLHFCQUFHO1FBQ0gsc0JBQUksQ0FBQyxPQUFPLENBQUM7bUJBQ1IsMkJBQVMsQ0FBQyxNQUFNLENBQUM7Ozs7MENBRFQ7SUFmbEI7UUFBQyxzQkFBSSxDQUFDLGlCQUFpQixDQUFDOzttQkFBQTtJQXVCeEIsa0JBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBIiwiZmlsZSI6ImFwaS92MS9BcGlfQ291cnNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhdGgsIENvbnRleHQsIFNlcnZpY2VDb250ZXh0LCBHRVQsIFBhdGhQYXJhbSB9IGZyb20gJ3R5cGVzY3JpcHQtcmVzdCdcclxuaW1wb3J0IHsgRG9jdW1lbnQgfSBmcm9tICdtb25nb29zZSdcclxuXHJcbmxldCBDb3Vyc2UgPSByZXF1aXJlKCcuL21vZGVscy9Nb2RlbF9Db3Vyc2UnKTtcclxuXHJcbkBQYXRoKCcvYXBpL3YxL2NvdXJzZXMnKVxyXG5hYnN0cmFjdCBjbGFzcyBBcGlfQ291cnNlcyB7XHJcbiAgICBAQ29udGV4dFxyXG4gICAgY29udGV4dDogU2VydmljZUNvbnRleHQ7XHJcblxyXG4gICAgQEdFVFxyXG4gICAgZ2V0TGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8RG9jdW1lbnRbXT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBDb3Vyc2UuZmluZCh7fSwge19pZDogZmFsc2V9LCAoZXJyOiBFcnJvciwgZGF0YTogRG9jdW1lbnRbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFlcnIpIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEBHRVRcclxuICAgIEBQYXRoKCc6bmFtZScpXHJcbiAgICBnZXQoIEBQYXRoUGFyYW0oJ25hbWUnKSBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8RG9jdW1lbnQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgQ291cnNlLmZpbmQoe25hbWU6IG5hbWV9LCB7X2lkOiBmYWxzZX0sIChlcnI6IEVycm9yLCBkYXRhOiBEb2N1bWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFlcnIpIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19
