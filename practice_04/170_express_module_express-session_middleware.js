const express = require('express');
const parseurl = require('parseurl');
const session = require('express-session');

const app = express();

app.use(session({
    secret: 'keyboard dog',
    resave: false,
    saveUninitialized: true,
}));

app.use((request, response, next) => {
    if (!request.session.views) {
        request.session.views = {};
    }

    console.log(request.session);

    const pathname = parseurl(request).pathname;

    request.session.views[pathname] = (request.session.views[pathname] || 0) + 1;

    next();
});

app.get('/puddle', (request, response) => {
    response.send(`Hello puddle! you viewed this page ${request.session.
        views['/biggle']} times`);
});

app.listen(3000, () => {
    console.log('Server is running port 3000!');
});