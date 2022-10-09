import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";


export interface UserDocument extends mongoose.Document{
    email:string;
    name:string;
    password:string;
    createdAt:Date;
    updatedAt:Date;
    comparePassword(candidatePassword:string):Promise<boolean>;
}



const userSchema = new mongoose.Schema(
    {
        email:{ type:String ,required:true, unique:true},
        name:{type:String, required:true},
        password:{  type:String , required:true}
    },
    {timestamps:true}
);



userSchema.pre("save",async function (next) {
     
    let user = this as UserDocument;

    //only hash the password  if  it has benn modified

    if(!user.isModified("password")) return next();
    
    // random additional data

    const salt = await bcrypt.genSalt(config.get("saltWorkFactor"));

    const hash = await bcrypt.hashSync(user.password,salt);
    //rEPLACE THE PASSWORD
    user.password = hash;

    return next();

});

//Used for logging in

userSchema.methods.comparePassword = async function (
    candidatePassword:string
) {
    const user = this as UserDocument;
    return  bcrypt.compare(candidatePassword,user.password).catch(
        (e)=>{
            false
    })
}

const User = mongoose.model<UserDocument>("User",userSchema);
export default User;