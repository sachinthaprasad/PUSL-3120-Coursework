import Role from '../models/Role.js'
import { CreateSuccess } from '../utils/success.js';
import { CreateError } from '../utils/error.js';

export const createRole = async (req, res, next) => {
    try{
        if(req.body.role && req.body.role !== ''){
            const newRole = new Role (req.body);
            await newRole.save();
            return next(CreateSuccess(200,"Role Successfully Created"));
            
        }
        else{           
            return next(CreateError(400, "Request is null"));
        }
    } catch (error) {
        return next(CreateError(500, "Internal Server Error! "));
    }
}


export const updateRole = async (req, res, next)=>{
    try {
        const role = await Role.findById({_id: req.params.id});
        if(role){
            const newData = await Role.findByIdAndUpdate(
                req.params.id,
                {$set: req.body},
                {new: true}
            );
            return next(CreateSuccess(200,"Role Updated Successfully"));
        }
        else{
            return next(CreateError(400, "Role not Found"));
        }
    } catch (error) {
        return next(CreateError(500, "Internal Server Error! "));
    }
 

}

// all the roles
export const getAllRoles = async (req, res, next) => {
    try {
         const roles = await Role.find({});
         return res.status(200).send(roles).getAllRoles;
    } catch (error) {
        return res.status(500).send("Internal Server Error!");
    }  
}

//delete 
export const deleteRole = async (req, res, next)=> {
    try {
         const roleId = req.params.id;
         const role = await Role.findById({_id: roleId});
         if(role){
            await Role.findByIdAndDelete(roleId);
            return res.status(200).send("Role Deleted");
         }
         else{
            return res.status(404).send("Role not found");
         }
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
}

