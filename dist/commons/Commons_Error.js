"use strict";
var Commons_Error = (function () {
    function Commons_Error() {
    }
    Commons_Error.notFound = function (context) {
        context.response.status(404);
        context.response.send("\n            <!DOCTYPE html>\n            <html lang=\"en\">\n            <head>\n            <meta charset=\"utf-8\">\n            <title>Error</title>\n            </head>\n            <body>\n            <pre>Cannot GET " + context.request.path + "</pre>\n            </body>\n        ");
    };
    Commons_Error.badRequest = function (context, errors) {
        context.response.status(400);
        context.response.json({
            status: 400,
            errors: errors
        });
    };
    return Commons_Error;
}());
exports.Commons_Error = Commons_Error;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbnMvQ29tbW9uc19FcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7SUFBQTtJQXNCQSxDQUFDO0lBckJVLHNCQUFRLEdBQWYsVUFBZ0IsT0FBdUI7UUFDbkMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMscU9BUUEsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLDBDQUV6QyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ00sd0JBQVUsR0FBakIsVUFBa0IsT0FBdUIsRUFBRSxNQUFhO1FBQ3BELE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLE1BQU0sRUFBRSxHQUFHO1lBQ1gsTUFBTSxFQUFFLE1BQU07U0FDakIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0F0QkEsQUFzQkMsSUFBQTtBQXRCcUIscUJBQWEsZ0JBc0JsQyxDQUFBIiwiZmlsZSI6ImNvbW1vbnMvQ29tbW9uc19FcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcnZpY2VDb250ZXh0IH0gZnJvbSAndHlwZXNjcmlwdC1yZXN0J1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbW1vbnNfRXJyb3Ige1xyXG4gICAgc3RhdGljIG5vdEZvdW5kKGNvbnRleHQ6IFNlcnZpY2VDb250ZXh0KSB7XHJcbiAgICAgICAgY29udGV4dC5yZXNwb25zZS5zdGF0dXMoNDA0KTtcclxuICAgICAgICBjb250ZXh0LnJlc3BvbnNlLnNlbmQoYFxyXG4gICAgICAgICAgICA8IURPQ1RZUEUgaHRtbD5cclxuICAgICAgICAgICAgPGh0bWwgbGFuZz1cImVuXCI+XHJcbiAgICAgICAgICAgIDxoZWFkPlxyXG4gICAgICAgICAgICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIj5cclxuICAgICAgICAgICAgPHRpdGxlPkVycm9yPC90aXRsZT5cclxuICAgICAgICAgICAgPC9oZWFkPlxyXG4gICAgICAgICAgICA8Ym9keT5cclxuICAgICAgICAgICAgPHByZT5DYW5ub3QgR0VUICR7Y29udGV4dC5yZXF1ZXN0LnBhdGh9PC9wcmU+XHJcbiAgICAgICAgICAgIDwvYm9keT5cclxuICAgICAgICBgKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBiYWRSZXF1ZXN0KGNvbnRleHQ6IFNlcnZpY2VDb250ZXh0LCBlcnJvcnM6IGFueVtdKSB7XHJcbiAgICAgICAgY29udGV4dC5yZXNwb25zZS5zdGF0dXMoNDAwKTtcclxuICAgICAgICBjb250ZXh0LnJlc3BvbnNlLmpzb24oe1xyXG4gICAgICAgICAgICBzdGF0dXM6IDQwMCxcclxuICAgICAgICAgICAgZXJyb3JzOiBlcnJvcnNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==
