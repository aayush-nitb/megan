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
    Api_Courses.prototype.post = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var course = new Course(data);
            course.set('isPredefined', false);
            course.save(function (err, count) {
                if (count && !err)
                    _this.context.response.json({
                        status: 200,
                        message: 'document saved'
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
    __decorate([
        typescript_rest_1.POST, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], Api_Courses.prototype, "post", null);
    Api_Courses = __decorate([
        typescript_rest_1.Path('/api/v1/courses'), 
        __metadata('design:paramtypes', [])
    ], Api_Courses);
    return Api_Courses;
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LENBQUM7d0JBQzFDLE1BQU0sRUFBRSxHQUFHO3dCQUNYLE9BQU8sRUFBRSxnQkFBZ0I7cUJBQzVCLENBQUMsQ0FBQztnQkFDSCxJQUFJO29CQUFDLDZCQUFhLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDckQsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFqREQ7UUFBQyx5QkFBTzs7Z0RBQUE7SUFHUjtRQUFDLHFCQUFHOzs7OzhDQUFBO0lBVUo7UUFBQyxxQkFBRztRQUFFLHNCQUFJLENBQUMsT0FBTyxDQUFDO21CQUNiLDJCQUFTLENBQUMsTUFBTSxDQUFDOzs7OzBDQURKO0lBVW5CO1FBQUMscUJBQUc7UUFBRSxzQkFBSSxDQUFDLE9BQU8sQ0FBQzttQkFDYiwyQkFBUyxDQUFDLE1BQU0sQ0FBQzs7OzswQ0FESjtJQWFuQjtRQUFDLHNCQUFJOzs7OzJDQUFBO0lBdENUO1FBQUMsc0JBQUksQ0FBQyxpQkFBaUIsQ0FBQzs7bUJBQUE7SUFvRHhCLGtCQUFDO0FBQUQsQ0FuREEsQUFtREMsSUFBQSIsImZpbGUiOiJhcGkvdjEvQXBpX0NvdXJzZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXRoLCBDb250ZXh0LCBTZXJ2aWNlQ29udGV4dCwgR0VULCBQYXRoUGFyYW0sIFBVVCwgUE9TVCwgREVMRVRFIH0gZnJvbSAndHlwZXNjcmlwdC1yZXN0J1xyXG5pbXBvcnQgeyBEb2N1bWVudCwgTW9kZWwgfSBmcm9tICdtb25nb29zZSdcclxuaW1wb3J0IHsgQ29tbW9uc19FcnJvciB9IGZyb20gJy4uLy4uL2NvbW1vbnMvQ29tbW9uc19FcnJvcidcclxuXHJcbmxldCBDb3Vyc2U6IE1vZGVsPERvY3VtZW50PiA9IHJlcXVpcmUoJy4vbW9kZWxzL01vZGVsX0NvdXJzZScpO1xyXG5cclxuQFBhdGgoJy9hcGkvdjEvY291cnNlcycpXHJcbmFic3RyYWN0IGNsYXNzIEFwaV9Db3Vyc2VzIHtcclxuICAgIEBDb250ZXh0XHJcbiAgICBjb250ZXh0OiBTZXJ2aWNlQ29udGV4dDtcclxuXHJcbiAgICBAR0VUXHJcbiAgICBnZXRMaXN0KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxEb2N1bWVudFtdPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIENvdXJzZS5maW5kKHt9LCB7X2lkOiBmYWxzZX0sIChlcnI6IEVycm9yLCBkYXRhOiBEb2N1bWVudFtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiAhZXJyKSByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBDb21tb25zX0Vycm9yLm5vdEZvdW5kKHRoaXMuY29udGV4dCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEBHRVQgQFBhdGgoJzpuYW1lJylcclxuICAgIGdldCggQFBhdGhQYXJhbSgnbmFtZScpIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxEb2N1bWVudD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBDb3Vyc2UuZmluZE9uZSh7bmFtZTogbmFtZX0sIHtfaWQ6IGZhbHNlfSwgKGVycjogRXJyb3IsIGRhdGE6IERvY3VtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiAhZXJyKSByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBDb21tb25zX0Vycm9yLm5vdEZvdW5kKHRoaXMuY29udGV4dCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEBQVVQgQFBhdGgoJzpuYW1lJylcclxuICAgIHB1dCggQFBhdGhQYXJhbSgnbmFtZScpIG5hbWU6IHN0cmluZywgZGF0YTogT2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPERvY3VtZW50PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIENvdXJzZS51cGRhdGUoe25hbWU6IG5hbWUsIGlzUHJlZGVmaW5lZDogZmFsc2V9LCBkYXRhLCB7cnVuVmFsaWRhdG9yczogdHJ1ZX0sIChlcnI6IEVycm9yLCBjb3VudDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgJiYgIWVycikgdGhpcy5jb250ZXh0LnJlc3BvbnNlLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdkb2N1bWVudCB1cGRhdGVkJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIENvbW1vbnNfRXJyb3IuYmFkUmVxdWVzdCh0aGlzLmNvbnRleHQsIGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEBQT1NUXHJcbiAgICBwb3N0KGRhdGE6IE9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxEb2N1bWVudD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY291cnNlID0gbmV3IENvdXJzZShkYXRhKTtcclxuICAgICAgICAgICAgY291cnNlLnNldCgnaXNQcmVkZWZpbmVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICBjb3Vyc2Uuc2F2ZSgoZXJyOiBFcnJvciwgY291bnQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ICYmICFlcnIpIHRoaXMuY29udGV4dC5yZXNwb25zZS5qc29uKHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnZG9jdW1lbnQgc2F2ZWQnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGVsc2UgQ29tbW9uc19FcnJvci5iYWRSZXF1ZXN0KHRoaXMuY29udGV4dCwgZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=
