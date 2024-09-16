import winston from "winston";

const loggerconfig = winston.createLogger({
    level:"info",
    format: winston.format.json(),
    transports:[
        new winston.transports.File({filename:"log.txt"}),
        new winston.transports.File({filename:"error.txt",level:"error"})
    ]
});

const loggerMiddleware = (req, res, next) => {
    // Check if the URL includes 'signin' or 'signup'
    if (req.url.includes("signin") || req.url.includes("signup")) {
        // If the URL includes 'signin' or 'signup', skip logging
        next();
    } else {
        // Log other requests
        let data = {
            TimeStamp: new Date().toString(),
            URL: req.url,
            Body: JSON.stringify(req.body)
        };
        loggerconfig.info(data);

        next();  // Proceed to the next middleware
    }
};


const errorMiddleware = (er,req)=> {
    let data = {
        TimeStamp:new Date().toString(),
        URL:req.url,
        Body: JSON.stringify(req.body),
        Errormsg:er.message,
        Stack:er.stack
    };

    loggerconfig.error(data);
}

export {loggerMiddleware,errorMiddleware};