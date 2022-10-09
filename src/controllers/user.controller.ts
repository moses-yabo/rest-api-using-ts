import { omit } from "lodash";
import logger from "../logger"
import {Request,Response} from "express";
import { createUser } from "../service/user.services";


export async function createUserHandler(req:Request , res:Response) {
    try {
        const user = await createUser(req.body);

        return res.send(omit(user.toJSON(),"password"))
    } catch (error:any) {
        logger.error(error);

        res.status(409).send(error.message);
    }
}

