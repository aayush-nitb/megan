"use strict";
var Commons_Error = (function () {
    function Commons_Error() {
    }
    Commons_Error.notFound = function (context) {
        context.response.status(404);
        context.response.send("\n            <!DOCTYPE html>\n            <html lang=\"en\">\n            <head>\n            <meta charset=\"utf-8\">\n            <title>Error</title>\n            </head>\n            <body>\n            <pre>Cannot GET " + context.request.path + "</pre>\n            </body>\n        ");
    };
    Commons_Error.badRequest = function (context, err) {
        context.response.status(400);
        context.response.json(err);
    };
    return Commons_Error;
}());
exports.Commons_Error = Commons_Error;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbnMvQ29tbW9uc19FcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7SUFBQTtJQW1CQSxDQUFDO0lBbEJVLHNCQUFRLEdBQWYsVUFBZ0IsT0FBdUI7UUFDbkMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMscU9BUUEsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLDBDQUV6QyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ00sd0JBQVUsR0FBakIsVUFBa0IsT0FBdUIsRUFBRSxHQUFVO1FBQ2pELE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDTCxvQkFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFuQnFCLHFCQUFhLGdCQW1CbEMsQ0FBQSIsImZpbGUiOiJjb21tb25zL0NvbW1vbnNfRXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXJ2aWNlQ29udGV4dCB9IGZyb20gJ3R5cGVzY3JpcHQtcmVzdCdcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb21tb25zX0Vycm9yIHtcclxuICAgIHN0YXRpYyBub3RGb3VuZChjb250ZXh0OiBTZXJ2aWNlQ29udGV4dCkge1xyXG4gICAgICAgIGNvbnRleHQucmVzcG9uc2Uuc3RhdHVzKDQwNCk7XHJcbiAgICAgICAgY29udGV4dC5yZXNwb25zZS5zZW5kKGBcclxuICAgICAgICAgICAgPCFET0NUWVBFIGh0bWw+XHJcbiAgICAgICAgICAgIDxodG1sIGxhbmc9XCJlblwiPlxyXG4gICAgICAgICAgICA8aGVhZD5cclxuICAgICAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCI+XHJcbiAgICAgICAgICAgIDx0aXRsZT5FcnJvcjwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvaGVhZD5cclxuICAgICAgICAgICAgPGJvZHk+XHJcbiAgICAgICAgICAgIDxwcmU+Q2Fubm90IEdFVCAke2NvbnRleHQucmVxdWVzdC5wYXRofTwvcHJlPlxyXG4gICAgICAgICAgICA8L2JvZHk+XHJcbiAgICAgICAgYCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYmFkUmVxdWVzdChjb250ZXh0OiBTZXJ2aWNlQ29udGV4dCwgZXJyOiBFcnJvcikge1xyXG4gICAgICAgIGNvbnRleHQucmVzcG9uc2Uuc3RhdHVzKDQwMCk7XHJcbiAgICAgICAgY29udGV4dC5yZXNwb25zZS5qc29uKGVycik7XHJcbiAgICB9XHJcbn0iXX0=
