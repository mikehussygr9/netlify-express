const express = require('express');
const serverless = require('serverless-http');
const requestIp = require('request-ip');

const router=express.Router();

const app = express();
router.get('/',(req, res) =>{

    const clientIp = requestIp.getClientIp(req);
    console.log(clientIp);
    //res.json({clientIp});
    res.send(clientIp);

});
app.use('/.netlify/functions/api',router);
module.exports.handler=serverless(app);
