var express = require('express');
var osRouter = express.Router();
const os = require('os');



osRouter.get('/', function(req, res, next) {
    res.json({
        hostname: os.hostname(),
        type: os.type(),
        platform: os.platform()
    });
    });

    osRouter.get('/cpus', function(req, res, next) {
        res.json({
            cpus: os.cpus()
        });
        });

    //     osRouter.get('/cpus/:id', function(req, res, next) {
    //         res.json({
    //             cpus: os.cpus()[req.params.id]
    //         });
    //         }
    //         );

module.exports = osRouter;





