const express = require('express');
const serverless = require('serverless-http');
const requestIp = require('request-ip');

const router=express.Router();

const app = express();
router.get('/',(req, res) =>{

    const clientIp = requestIp.getClientIp(req);
    //const geo = geoip.lookup(ipg);
    const geo = geoip.lookup(clientIp.toString());
    if (geo.country==="IN")
    {
        res.redirect('https://www.facebook.com/goo');
    }
    else
    {
        res.redirect("https://www.google.com/");
    }
    console.log(clientIp);
    //res.json({clientIp});
    res.send(clientIp);

});
app.use('/.netlify/functions/api',router);
module.exports.handler=serverless(app);
