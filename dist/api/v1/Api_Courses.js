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
var Course = require('./models/Model_Course').model;
var validation = require('./models/Model_Course').validation;
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
            Course.update({ name: name, isPredefined: false }, data, { runValidators: true }, function (err, output) {
                if (!err)
                    _this.context.response.json(output);
                else
                    Commons_Error_1.Commons_Error.badRequest(_this.context, err);
            });
        });
    };
    Api_Courses.prototype.post = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var course = new Course(data);
            course.set('isPredefined', false);
            course.save(function (err, output) {
                if (!err)
                    _this.context.response.json(output);
                else
                    Commons_Error_1.Commons_Error.badRequest(_this.context, err);
            });
        });
    };
    Api_Courses.prototype.delete = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Course.findOne({ name: name }, function (err, data) {
                if (data && !err) {
                    var course = new Course(data);
                    if (course.get('isPredefined')) {
                        Commons_Error_1.Commons_Error.badRequest(_this.context, {
                            status: 400,
                            message: validation.isPredefined.persistent
                        });
                    }
                    else {
                        course.remove(function (err) {
                            if (err)
                                Commons_Error_1.Commons_Error.badRequest(_this.context, err);
                            else
                                _this.context.response.json({
                                    status: 200,
                                    message: 'document deleted'
                                });
                        });
                    }
                }
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
        __metadata('design:paramtypes', [String, Object]), 
        __metadata('design:returntype', void 0)
    ], Api_Courses.prototype, "put", null);
    __decorate([
        typescript_rest_1.POST, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], Api_Courses.prototype, "post", null);
    __decorate([
        typescript_rest_1.DELETE,
        typescript_rest_1.Path(':name'),
        __param(0, typescript_rest_1.PathParam('name')), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [String]), 
        __metadata('design:returntype', void 0)
    ], Api_Courses.prototype, "delete", null);
    Api_Courses = __decorate([
        typescript_rest_1.Path('/api/v1/courses'), 
        __metadata('design:paramtypes', [])
    ], Api_Courses);
    return Api_Courses;
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,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O3dCQUNQLENBQUMsQ0FBQyxDQUFDO29CQUNQLENBQUM7Z0JBQ0wsQ0FBQztnQkFDRCxJQUFJO29CQUFDLDZCQUFhLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5QyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXRFRDtRQUFDLHlCQUFPOztnREFBQTtJQUdSO1FBQUMscUJBQUc7Ozs7OENBQUE7SUFVSjtRQUFDLHFCQUFHO1FBQUUsc0JBQUksQ0FBQyxPQUFPLENBQUM7bUJBQ2IsMkJBQVMsQ0FBQyxNQUFNLENBQUM7Ozs7MENBREo7SUFVbkI7UUFBQyxxQkFBRztRQUFFLHNCQUFJLENBQUMsT0FBTyxDQUFDO21CQUNiLDJCQUFTLENBQUMsTUFBTSxDQUFDOzs7OzBDQURKO0lBV25CO1FBQUMsc0JBQUk7Ozs7MkNBQUE7SUFZTDtRQUFDLHdCQUFNO1FBQUUsc0JBQUksQ0FBQyxPQUFPLENBQUM7bUJBQ2IsMkJBQVMsQ0FBQyxNQUFNLENBQUM7Ozs7NkNBREo7SUFoRDFCO1FBQUMsc0JBQUksQ0FBQyxpQkFBaUIsQ0FBQzs7bUJBQUE7SUF5RXhCLGtCQUFDO0FBQUQsQ0F4RUEsQUF3RUMsSUFBQSIsImZpbGUiOiJhcGkvdjEvQXBpX0NvdXJzZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXRoLCBDb250ZXh0LCBTZXJ2aWNlQ29udGV4dCwgR0VULCBQYXRoUGFyYW0sIFBVVCwgUE9TVCwgREVMRVRFIH0gZnJvbSAndHlwZXNjcmlwdC1yZXN0J1xyXG5pbXBvcnQgeyBEb2N1bWVudCwgTW9kZWwgfSBmcm9tICdtb25nb29zZSdcclxuaW1wb3J0IHsgQ29tbW9uc19FcnJvciB9IGZyb20gJy4uLy4uL2NvbW1vbnMvQ29tbW9uc19FcnJvcidcclxuXHJcbmxldCBDb3Vyc2U6IE1vZGVsPERvY3VtZW50PiA9IHJlcXVpcmUoJy4vbW9kZWxzL01vZGVsX0NvdXJzZScpLm1vZGVsO1xyXG5sZXQgdmFsaWRhdGlvbiA9IHJlcXVpcmUoJy4vbW9kZWxzL01vZGVsX0NvdXJzZScpLnZhbGlkYXRpb247XHJcblxyXG5AUGF0aCgnL2FwaS92MS9jb3Vyc2VzJylcclxuYWJzdHJhY3QgY2xhc3MgQXBpX0NvdXJzZXMge1xyXG4gICAgQENvbnRleHRcclxuICAgIGNvbnRleHQ6IFNlcnZpY2VDb250ZXh0O1xyXG5cclxuICAgIEBHRVRcclxuICAgIGdldExpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPERvY3VtZW50W10+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgQ291cnNlLmZpbmQoe30sIHtfaWQ6IGZhbHNlfSwgKGVycjogRXJyb3IsIGRhdGE6IERvY3VtZW50W10pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhICYmICFlcnIpIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIENvbW1vbnNfRXJyb3Iubm90Rm91bmQodGhpcy5jb250ZXh0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgQEdFVCBAUGF0aCgnOm5hbWUnKVxyXG4gICAgZ2V0KCBAUGF0aFBhcmFtKCduYW1lJykgbmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPERvY3VtZW50PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIENvdXJzZS5maW5kT25lKHtuYW1lOiBuYW1lfSwge19pZDogZmFsc2V9LCAoZXJyOiBFcnJvciwgZGF0YTogRG9jdW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhICYmICFlcnIpIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIENvbW1vbnNfRXJyb3Iubm90Rm91bmQodGhpcy5jb250ZXh0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgQFBVVCBAUGF0aCgnOm5hbWUnKVxyXG4gICAgcHV0KCBAUGF0aFBhcmFtKCduYW1lJykgbmFtZTogc3RyaW5nLCBkYXRhOiBPYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8RG9jdW1lbnQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgQ291cnNlLnVwZGF0ZSh7bmFtZTogbmFtZSwgaXNQcmVkZWZpbmVkOiBmYWxzZX0sIGRhdGEsIHtydW5WYWxpZGF0b3JzOiB0cnVlfSxcclxuICAgICAgICAgICAgKGVycjogRXJyb3IsIG91dHB1dDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVycikgdGhpcy5jb250ZXh0LnJlc3BvbnNlLmpzb24ob3V0cHV0KTtcclxuICAgICAgICAgICAgICAgIGVsc2UgQ29tbW9uc19FcnJvci5iYWRSZXF1ZXN0KHRoaXMuY29udGV4dCwgZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgQFBPU1RcclxuICAgIHBvc3QoZGF0YTogT2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPERvY3VtZW50PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjb3Vyc2UgPSBuZXcgQ291cnNlKGRhdGEpO1xyXG4gICAgICAgICAgICBjb3Vyc2Uuc2V0KCdpc1ByZWRlZmluZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGNvdXJzZS5zYXZlKChlcnI6IEVycm9yLCBvdXRwdXQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFlcnIpIHRoaXMuY29udGV4dC5yZXNwb25zZS5qc29uKG91dHB1dCk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIENvbW1vbnNfRXJyb3IuYmFkUmVxdWVzdCh0aGlzLmNvbnRleHQsIGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEBERUxFVEUgQFBhdGgoJzpuYW1lJylcclxuICAgIGRlbGV0ZSggQFBhdGhQYXJhbSgnbmFtZScpIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxEb2N1bWVudD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBDb3Vyc2UuZmluZE9uZSh7bmFtZTogbmFtZX0sIChlcnI6IEVycm9yLCBkYXRhOiBEb2N1bWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgIWVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb3Vyc2UgPSBuZXcgQ291cnNlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3Vyc2UuZ2V0KCdpc1ByZWRlZmluZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb21tb25zX0Vycm9yLmJhZFJlcXVlc3QodGhpcy5jb250ZXh0LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDQwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHZhbGlkYXRpb24uaXNQcmVkZWZpbmVkLnBlcnNpc3RlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291cnNlLnJlbW92ZSgoZXJyOiBFcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikgQ29tbW9uc19FcnJvci5iYWRSZXF1ZXN0KHRoaXMuY29udGV4dCwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5jb250ZXh0LnJlc3BvbnNlLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdkb2N1bWVudCBkZWxldGVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgQ29tbW9uc19FcnJvci5ub3RGb3VuZCh0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==
