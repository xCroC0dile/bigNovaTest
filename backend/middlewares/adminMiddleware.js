import jwt from 'jsonwebtoken';
const adminAuth =  async (req,res,next) =>{
    try{
       const {token} =req.headers
       if(!token){
        return res.json({success:false,message:"Not Authorized"})
       }
       const token_decode =jwt.verify(token,process.env.JWT_SECRET);
       if(token_decode !== process.env.admin_EMAIL + process.env.admin_password){
        return res.json({success:false,message:"Not Authorized"})
       }
       next()
    }catch(error){
    console.log(error);
    res.json({success:false,message:error.message});
    }
} 
export default adminAuth