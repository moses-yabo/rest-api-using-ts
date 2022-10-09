import { Request,Response } from "express";

const getAllUsersController = (request:Request,response:Response) =>{
    
    const users = [
        {
            name:"Peter",
            age:30
        },
        {
            name:"Dora",
            age:31
        },
        {
            name:"Peter",
            age:30
        }
    ];
    response.statusCode = 200;
    response.send(users)
    console.log(users);
    
    
}

export default getAllUsersController;
