import {Request,Response} from "express";
import { validatePassword } from "../service/user.services";
import config from "config";
import {sign} from "../jwt.utils";          
import { createAccessToken, createSession } from "../service/session.service";

export async function createUserSessionHandler(req:Request, res:Response) {

const user:any = await validatePassword(req.body);

if (!user) {

     //validate the mail and password

    return res.status(401).send("Invalid username or password");
}

    //Create a session

const session:any = await createSession(user._id,req.get("user-agent")||"");
//create Access token

const accessToken = createAccessToken({
    user,
    session,
    
});
 //create refresh token

const refreshToken = sign(session,{
    expiresIn:config.get("refreshTokenTtl"),//1 Year
});


//Send refresh & accept token

    return res.send({accessToken,refreshToken})

    

}


export default createUserSessionHandler;