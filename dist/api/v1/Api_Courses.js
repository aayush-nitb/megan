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
var Commons_Error_1 = require('../../commons/Commons_Error');
var Course = require('./models/Model_Course');
var Api_Courses = (function () {
    function Api_Courses() {
    }
    Api_Courses.prototype.getList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Course.find({}, { _id: false }, function (err, data) {
                if (data && !err)
                    resolve(data);
                else
                    Commons_Error_1.Commons_Error.notFound(_this.context);
            });
        });
    };
    Api_Courses.prototype.get = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Course.findOne({ name: name }, { _id: false }, function (err, data) {
                if (data && !err)
                    resolve(data);
                else
                    Commons_Error_1.Commons_Error.notFound(_this.context);
            });
        });
    };
    Api_Courses.prototype.put = function (name, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Course.update({ name: name, isPredefined: false }, data, { runValidators: true }, function (err, count) {
                if (count && !err)
                    _this.context.response.json({
                        status: 200,
                        message: 'document updated'
                    });
                else
                    Commons_Error_1.Commons_Error.badRequest(_this.context, err);
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
    __decorate([
        typescript_rest_1.PUT,
        typescript_rest_1.Path(':name'),
        __param(0, typescript_rest_1.PathParam('name')), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [String, Object]), 
        __metadata('design:returntype', void 0)
    ], Api_Courses.prototype, "put", null);
    Api_Courses = __decorate([
        typescript_rest_1.Path('/api/v1/courses'), 
        __metadata('design:paramtypes', [])
    ], Api_Courses);
    return Api_Courses;
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Q29udGVudCI6WyJpbXBvcnQgeyBQYXRoLCBDb250ZXh0LCBTZXJ2aWNlQ29udGV4dCwgR0VULCBQYXRoUGFyYW0sIFBVVCB9IGZyb20gJ3R5cGVzY3JpcHQtcmVzdCdcclxuaW1wb3J0IHsgRG9jdW1lbnQsIE1vZGVsIH0gZnJvbSAnbW9uZ29vc2UnXHJcbmltcG9ydCB7IENvbW1vbnNfRXJyb3IgfSBmcm9tICcuLi8uLi9jb21tb25zL0NvbW1vbnNfRXJyb3InXHJcblxyXG5sZXQgQ291cnNlOiBNb2RlbDxEb2N1bWVudD4gPSByZXF1aXJlKCcuL21vZGVscy9Nb2RlbF9Db3Vyc2UnKTtcclxuXHJcbkBQYXRoKCcvYXBpL3YxL2NvdXJzZXMnKVxyXG5hYnN0cmFjdCBjbGFzcyBBcGlfQ291cnNlcyB7XHJcbiAgICBAQ29udGV4dFxyXG4gICAgY29udGV4dDogU2VydmljZUNvbnRleHQ7XHJcblxyXG4gICAgQEdFVFxyXG4gICAgZ2V0TGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8RG9jdW1lbnRbXT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBDb3Vyc2UuZmluZCh7fSwge19pZDogZmFsc2V9LCAoZXJyOiBFcnJvciwgZGF0YTogRG9jdW1lbnRbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgIWVycikgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgQ29tbW9uc19FcnJvci5ub3RGb3VuZCh0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBAR0VUIEBQYXRoKCc6bmFtZScpXHJcbiAgICBnZXQoIEBQYXRoUGFyYW0oJ25hbWUnKSBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8RG9jdW1lbnQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgQ291cnNlLmZpbmRPbmUoe25hbWU6IG5hbWV9LCB7X2lkOiBmYWxzZX0sIChlcnI6IEVycm9yLCBkYXRhOiBEb2N1bWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgIWVycikgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgQ29tbW9uc19FcnJvci5ub3RGb3VuZCh0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBAUFVUIEBQYXRoKCc6bmFtZScpXHJcbiAgICBwdXQoIEBQYXRoUGFyYW0oJ25hbWUnKSBuYW1lOiBzdHJpbmcsIGRhdGE6IE9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxEb2N1bWVudD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBDb3Vyc2UudXBkYXRlKHtuYW1lOiBuYW1lLCBpc1ByZWRlZmluZWQ6IGZhbHNlfSwgZGF0YSwge3J1blZhbGlkYXRvcnM6IHRydWV9LCAoZXJyOiBFcnJvciwgY291bnQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ICYmICFlcnIpIHRoaXMuY29udGV4dC5yZXNwb25zZS5qc29uKHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnZG9jdW1lbnQgdXBkYXRlZCdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBDb21tb25zX0Vycm9yLmJhZFJlcXVlc3QodGhpcy5jb250ZXh0LCBlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==
