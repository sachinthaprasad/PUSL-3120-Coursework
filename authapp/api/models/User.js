import mongoose, {Schema} from "mongoose";



const UserSchema = mongoose.Schema(                    //  creating the schema for users, passing the objects inside of the schema

{
  firstName:{
    type: String, 
    required: true
  }, 
  lastName: {
    type:String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique:true
  },
  email: {
    type: String,
    required: true 
  },
  password:{
    type:String,
    required:true,
  },
  profileImage:{
    type: String,
    // required: false,
    default: ''
  },
  isAdmin: {             
    type:Boolean,               
    default: false,            
  },
  roles:{ 
    type: [Schema.Types.ObjectId],
    required: false,
    ref: "Role"  // referes to the "Role" table in the Role.js 
  } 
  

},
{
    timestamps: true  // the date and time of creations and updates 
}

);

export default mongoose.model("User", UserSchema);
