"use strict";
var Commons_Error = (function () {
    function Commons_Error() {
    }
    Commons_Error.notFound = function (context) {
        context.response.status(404);
        context.response.send("\n            <!DOCTYPE html>\n            <html lang=\"en\">\n            <head>\n            <meta charset=\"utf-8\">\n            <title>Error</title>\n            </head>\n            <body>\n            <pre>Cannot GET " + context.request.path + "</pre>\n            </body>\n        ");
    };
    return Commons_Error;
}());
exports.Commons_Error = Commons_Error;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbnMvQ29tbW9uc19FcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7SUFBQTtJQWVBLENBQUM7SUFkVSxzQkFBUSxHQUFmLFVBQWdCLE9BQXVCO1FBQ25DLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHFPQVFBLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSwwQ0FFekMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmcUIscUJBQWEsZ0JBZWxDLENBQUEiLCJmaWxlIjoiY29tbW9ucy9Db21tb25zX0Vycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VydmljZUNvbnRleHQgfSBmcm9tICd0eXBlc2NyaXB0LXJlc3QnXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tbW9uc19FcnJvciB7XHJcbiAgICBzdGF0aWMgbm90Rm91bmQoY29udGV4dDogU2VydmljZUNvbnRleHQpIHtcclxuICAgICAgICBjb250ZXh0LnJlc3BvbnNlLnN0YXR1cyg0MDQpO1xyXG4gICAgICAgIGNvbnRleHQucmVzcG9uc2Uuc2VuZChgXHJcbiAgICAgICAgICAgIDwhRE9DVFlQRSBodG1sPlxyXG4gICAgICAgICAgICA8aHRtbCBsYW5nPVwiZW5cIj5cclxuICAgICAgICAgICAgPGhlYWQ+XHJcbiAgICAgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiPlxyXG4gICAgICAgICAgICA8dGl0bGU+RXJyb3I8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L2hlYWQ+XHJcbiAgICAgICAgICAgIDxib2R5PlxyXG4gICAgICAgICAgICA8cHJlPkNhbm5vdCBHRVQgJHtjb250ZXh0LnJlcXVlc3QucGF0aH08L3ByZT5cclxuICAgICAgICAgICAgPC9ib2R5PlxyXG4gICAgICAgIGApO1xyXG4gICAgfVxyXG59Il19
