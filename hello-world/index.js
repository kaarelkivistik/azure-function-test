const React = require("react")
const ReactDOMServer = require("react-dom/server")

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: ReactDOMServer.renderToStaticMarkup(
            React.createElement("div", null, "well hello")
        )
    };

    context.done();
};
