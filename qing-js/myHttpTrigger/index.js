module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    const colors = require('colors');
    const chosenColor = colors.getRandomColor();
    console.log(`You should use ${chosenColor.name} on your website. It's HTML code is ${chosenColor.code}`);

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            
            body: "Hello " + (req.query.name || req.body.name) + chosenColor.name
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};