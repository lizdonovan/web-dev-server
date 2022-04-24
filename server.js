import express from 'express';
//import cors from 'cors';

import helloController
    from "./controllers/hello-controller.js";
import userController   from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";

const app = express();
//app.use(cors());
app.use(function(req,
                 res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.get('/hello', (req, res) => {res.send('Hello World!')})
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})

app.use(express.json());
helloController(app);
userController(app);
tuitsController(app)
app.listen(4000);
