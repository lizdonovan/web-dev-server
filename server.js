import express from 'express'
import cors from 'cors'
import mongoose from "mongoose";

import helloController from "./controllers/hello-controller.js";
import userController   from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://127.0.0.1:27017/webdev'
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());
helloController(app);
app.use(express.json());
userController(app);
tuitsController(app);
app.listen(process.env.PORT || 4000);

