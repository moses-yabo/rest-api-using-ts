import {Express,Response,Request} from "express";
import { createUserHandler } from "./controllers/user.controller";
import { createUserSessionHandler } from "./controllers/session.controller";
import validateRequest from "./middleware/validateRequest"
import createUserSchema from "./schema/user.schema";
import createUserSessionSchema from "./schema/session.schema";
export default function (app:Express) {

    app.get("/healthcheck",(req:Request,res:Response)=> res.sendStatus(200));



//Register user
app.post("/api/users",validateRequest(createUserSchema),createUserHandler)

//Post/api/user

//login
app.post(
    "/api/sessions",validateRequest(createUserSessionSchema),createUserSessionHandler
)
//Post /api/ user

// Post api/session
//get the user's sessions

//get the user's session //log
//get api sessions

//Logout
//Delete api/sessions

}