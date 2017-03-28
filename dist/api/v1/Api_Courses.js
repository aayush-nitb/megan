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
    Api_Courses.prototype.put = function (name, course) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var errors = Course.validationErrors();
            if (errors) {
                Commons_Error_1.Commons_Error.badRequest(_this.context, errors);
                return;
            }
            Course.update({ name: name }, course, function (err, count) {
                if (count && !err)
                    resolve();
                else
                    Commons_Error_1.Commons_Error.notFound(_this.context);
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
        __metadata('design:paramtypes', [String, mongoose_1.Document]), 
        __metadata('design:returntype', void 0)
    ], Api_Courses.prototype, "put", null);
    Api_Courses = __decorate([
        typescript_rest_1.Path('/api/v1/courses'), 
        __metadata('design:paramtypes', [])
    ], Api_Courses);
    return Api_Courses;
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,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YXBpL3YxL0FwaV9Db3Vyc2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF0aCwgQ29udGV4dCwgU2VydmljZUNvbnRleHQsIEdFVCwgUGF0aFBhcmFtLCBQVVQgfSBmcm9tICd0eXBlc2NyaXB0LXJlc3QnXHJcbmltcG9ydCB7IERvY3VtZW50IH0gZnJvbSAnbW9uZ29vc2UnXHJcbmltcG9ydCB7IENvbW1vbnNfRXJyb3IgfSBmcm9tICcuLi8uLi9jb21tb25zL0NvbW1vbnNfRXJyb3InXHJcblxyXG5sZXQgQ291cnNlID0gcmVxdWlyZSgnLi9tb2RlbHMvTW9kZWxfQ291cnNlJyk7XHJcblxyXG5AUGF0aCgnL2FwaS92MS9jb3Vyc2VzJylcclxuYWJzdHJhY3QgY2xhc3MgQXBpX0NvdXJzZXMge1xyXG4gICAgQENvbnRleHRcclxuICAgIGNvbnRleHQ6IFNlcnZpY2VDb250ZXh0O1xyXG5cclxuICAgIEBHRVRcclxuICAgIGdldExpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPERvY3VtZW50W10+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgQ291cnNlLmZpbmQoe30sIHtfaWQ6IGZhbHNlfSwgKGVycjogRXJyb3IsIGRhdGE6IERvY3VtZW50W10pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhICYmICFlcnIpIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIENvbW1vbnNfRXJyb3Iubm90Rm91bmQodGhpcy5jb250ZXh0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgQEdFVCBAUGF0aCgnOm5hbWUnKVxyXG4gICAgZ2V0KCBAUGF0aFBhcmFtKCduYW1lJykgbmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPERvY3VtZW50PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIENvdXJzZS5maW5kT25lKHtuYW1lOiBuYW1lfSwge19pZDogZmFsc2V9LCAoZXJyOiBFcnJvciwgZGF0YTogRG9jdW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhICYmICFlcnIpIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIENvbW1vbnNfRXJyb3Iubm90Rm91bmQodGhpcy5jb250ZXh0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgQFBVVCBAUGF0aCgnOm5hbWUnKVxyXG4gICAgcHV0KCBAUGF0aFBhcmFtKCduYW1lJykgbmFtZTogc3RyaW5nLCBjb3Vyc2U6IERvY3VtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPERvY3VtZW50PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBlcnJvcnMgPSBDb3Vyc2UudmFsaWRhdGlvbkVycm9ycygpO1xyXG4gICAgICAgICAgICBpZiAoZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBDb21tb25zX0Vycm9yLmJhZFJlcXVlc3QodGhpcy5jb250ZXh0LCBlcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIENvdXJzZS51cGRhdGUoe25hbWU6IG5hbWV9LCBjb3Vyc2UsIChlcnI6IEVycm9yLCBjb3VudDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgJiYgIWVycikgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBDb21tb25zX0Vycm9yLm5vdEZvdW5kKHRoaXMuY29udGV4dCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19
