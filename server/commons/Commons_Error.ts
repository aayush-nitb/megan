import { ServiceContext } from 'typescript-rest'

export abstract class Commons_Error {
    static notFound(context: ServiceContext) {
        context.response.status(404);
        context.response.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="utf-8">
            <title>Error</title>
            </head>
            <body>
            <pre>Cannot GET ${context.request.path}</pre>
            </body>
        `);
    }
}