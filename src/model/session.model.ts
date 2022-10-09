import mongoose from "mongoose";
import { UserDocument } from "./user.model";

export interface SessionDocument extends mongoose.Document{
    user:UserDocument["_id"];
    vaild:boolean;
    userAgent:string;
    createdAt:Date;

}

const SessionSchema = new mongoose.Schema(
    {
        user:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
        vaild:{type:Boolean , default:true},
        userAgent:{type:String}
    },
    { timestamps:true}
);


export const Session = mongoose.model<SessionDocument>("Session",SessionSchema);

export default Session;