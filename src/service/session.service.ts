import config from "config";
import { LeanDocument } from "mongoose";
import Session,{SessionDocument} from "../model/session.model";
import { UserDocument } from "../model/user.model";
import  {sign} from "../jwt.utils"


export async function createSession(userId:string,userAgent:string) {
    const session = await Session.create({user:userId,userAgent})

    return session.toJSON();
}

export function createAccessToken({
    user,
    session
}:{
    user:
    |Omit<UserDocument,"password">
    |Omit<SessionDocument,"password">

    session:

    |Omit<SessionDocument,"password">
    |LeanDocument<Omit<SessionDocument,"password">>
}) {
    //build and return the new access Token the new acces token

    const accessToken = sign({...user,session:session._id},
        {expiresIn:config.get("accessTokenTlt")}
        );

        return accessToken;
}

// export interface SessionDocument extends mongoose.Document {
//     user:UserDocument["_id"];
//     vaild:boolean;
//     userAgent:string;
//     createdAt:Date;
//     updatedAt:Date;
    
// }


// const SessionSchema = new mongoose.Schema({
//     user:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
//     valid:{type:Boolean , default:true},
//     userAgent:{type:String},

// },
// {timestamps:true}
// );

// const User = mongoose.model<SessionDocument>("Session",SessionSchema);