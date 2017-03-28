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
            Course.update({ name: name }, data, { runValidators: true }, function (err, count) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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UGF0aCwgQ29udGV4dCwgU2VydmljZUNvbnRleHQsIEdFVCwgUGF0aFBhcmFtLCBQVVQgfSBmcm9tICd0eXBlc2NyaXB0LXJlc3QnXHJcbmltcG9ydCB7IERvY3VtZW50LCBNb2RlbCB9IGZyb20gJ21vbmdvb3NlJ1xyXG5pbXBvcnQgeyBDb21tb25zX0Vycm9yIH0gZnJvbSAnLi4vLi4vY29tbW9ucy9Db21tb25zX0Vycm9yJ1xyXG5cclxubGV0IENvdXJzZTogTW9kZWw8RG9jdW1lbnQ+ID0gcmVxdWlyZSgnLi9tb2RlbHMvTW9kZWxfQ291cnNlJyk7XHJcblxyXG5AUGF0aCgnL2FwaS92MS9jb3Vyc2VzJylcclxuYWJzdHJhY3QgY2xhc3MgQXBpX0NvdXJzZXMge1xyXG4gICAgQENvbnRleHRcclxuICAgIGNvbnRleHQ6IFNlcnZpY2VDb250ZXh0O1xyXG5cclxuICAgIEBHRVRcclxuICAgIGdldExpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPERvY3VtZW50W10+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgQ291cnNlLmZpbmQoe30sIHtfaWQ6IGZhbHNlfSwgKGVycjogRXJyb3IsIGRhdGE6IERvY3VtZW50W10pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhICYmICFlcnIpIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIENvbW1vbnNfRXJyb3Iubm90Rm91bmQodGhpcy5jb250ZXh0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgQEdFVCBAUGF0aCgnOm5hbWUnKVxyXG4gICAgZ2V0KCBAUGF0aFBhcmFtKCduYW1lJykgbmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPERvY3VtZW50PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIENvdXJzZS5maW5kT25lKHtuYW1lOiBuYW1lfSwge19pZDogZmFsc2V9LCAoZXJyOiBFcnJvciwgZGF0YTogRG9jdW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhICYmICFlcnIpIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIENvbW1vbnNfRXJyb3Iubm90Rm91bmQodGhpcy5jb250ZXh0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgQFBVVCBAUGF0aCgnOm5hbWUnKVxyXG4gICAgcHV0KCBAUGF0aFBhcmFtKCduYW1lJykgbmFtZTogc3RyaW5nLCBkYXRhOiBPYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8RG9jdW1lbnQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgQ291cnNlLnVwZGF0ZSh7bmFtZTogbmFtZX0sIGRhdGEsIHtydW5WYWxpZGF0b3JzOiB0cnVlfSwgKGVycjogRXJyb3IsIGNvdW50OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjb3VudCAmJiAhZXJyKSB0aGlzLmNvbnRleHQucmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ2RvY3VtZW50IHVwZGF0ZWQnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGVsc2UgQ29tbW9uc19FcnJvci5iYWRSZXF1ZXN0KHRoaXMuY29udGV4dCwgZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=
