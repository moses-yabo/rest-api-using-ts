import http from 'http';
import config from "config";
import express, { NextFunction,Request,Response } from 'express';
import log from "./logger"
import connect from './db/connect';
import routes from './routes';
const app = express();
const server = new http.Server(app);
const port = config.get("port") as number;
const host = config.get("host") as string;



app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen(port,host,()=>{
    log.info(`Server listing at http://${host}:${port}`);
    connect();
    routes(app);
})