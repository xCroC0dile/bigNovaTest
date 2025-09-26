import referralModel from "../models/referral.js";
import userModel from "../models/user.js";

const addReferral = async (req, res) => {
  try {
    // const { referralId } = req.params;
    const { name, email, phone, referralId } = req.body;
    if (!referralId) {
        return res.status(400).json({ success: false, message: "Referral code is required" });
      }
      

    // find the user that owns this referralId
    const user = await userModel.findOne({ referralId });
    if (!user) {
      return res.status(404).json({ success: false, message: "Invalid referral code" });
    }

    // create referral for that user
    const referral = new referralModel({
      name,
      email,
      phone,
      userId: user._id,
    });

    await referral.save();

    res.json({ success: true, referral });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
// get one referral by sponsorId
const getOneReferral = async (req, res) => {
try{
    const {sponsorId} = req.body;
    if(!sponsorId){
        return res.status(400).json({ success: false, message: "sponsorId is required" });
    }
    const referrals = await referralModel.find({ userId: sponsorId });
    res.json({ success: true, referrals });
} catch(error){
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
}
}

// get all referrals
const getAllReferrals = async (req, res) => {
    try {

      const referrals = await referralModel.find().populate("userId", "name email");
  
      res.json({ success: true, referrals });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: error.message });
    }
  };
// update referral status
const updateReferralStatus = async (req, res) => {
    try {
        const { referralId,status} = req.body;
        if (!referralId) {
            return res.status(400).json({ success: false, message: "Referral ID is required" });
          }
            const referral = await referralModel.findById(referralId);
            if (!referral) {
                return res.status(404).json({ success: false, message: "Referral not found" });
              }
                referral.status = status; 
                await referral.save();
                res.json({ success: true, referral });
    } catch (error) {  
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }


}
// delete referral
const deleteReferral = async (req, res) => {
    try {
      const { referralId } = req.body;
  
      const referral = await referralModel.findById(referralId);
      if (!referral) {
        return res.status(404).json({ success: false, message: "Referral not found" });
      }
  
      await referral.deleteOne();
  
      res.json({ success: true, message: "Referral deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: error.message });
    }
  };

export {addReferral,getOneReferral,getAllReferrals,updateReferralStatus,deleteReferral};
