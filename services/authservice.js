import { Users } from "../models/users"

const signUp = async (data) => {
    
    let res = {};
     const userExist = await Users.findone({email : data.email});
     if(userExist){
            res = {
                success : false,
                status : 403,
                data : null,
            }
     }
     else{
        const result = await Users.create(data);
        res = {
            success : true,
            status : 200,
            data : result,
        }
     }
     return res;
}



