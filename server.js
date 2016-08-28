var path = require('path');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
var React = require('react');
var reactRouter = require('react-router');
var Router = reactRouter.Router;
var dotenv = require('dotenv').config();
var bodyParser      = require('body-parser');
var nodeMailer = require('nodemailer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '')));

// Access Headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://trevorlinan.herokuapp.com');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);

    // Pass to next layer of middleware
    next();
});

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
    console.log('Hello from the server!');
});

// Send email with contact form information
app.post('/sendForm', function (req, res) {
    var mailOptions = {
        from: {
            name: req.body.name,
            address: dotenv.EMAIL
        },
        sender: req.body.email,
        replyTo: req.body.email,
        to: dotenv.EMAIL,
        subject: req.body.subject,
        text: req.body.message
    };

    var transporter = nodeMailer.createTransport({
        host: 'smtp.mailgun.org',
        port: 465,
        secure: true,
        auth: {
            user: 'postmaster@sandbox019863230a794dcfa6d04c57b45f29f7.mailgun.org',
            pass: 'ed775e3806fb10d50007fdc580384043'
        }

    });

    transporter.sendMail(mailOptions, function (error, info){
        if(error) {
            console.log(error);
            res.json('uh oh');
        } else {
            console.log('Message successful: ' + info.response);
            res.json('yo');
        }
    })

});

/********************************* TEST SPACE ***************************************/



/********************************* END TEST SPACE ***************************************/

// using webpack-dev-server and middleware in development environment
if(process.env.NODE_ENV !== 'production') {
    var webpackDevMiddleware = require('webpack-dev-middleware');
    var webpackHotMiddleware = require('webpack-hot-middleware');
    var webpack = require('webpack');
    var config = require('./webpack.dev.config');
    var compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
    app.use(webpackHotMiddleware(compiler));

}

app.listen(PORT, function(error) {
    if (error) {
        console.error(error);
    } else {
        console.info("==> ?  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    }
});