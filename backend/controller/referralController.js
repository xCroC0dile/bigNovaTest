import referralModel from "../models/referral.js";
import userModel from "../models/user.js";

const addReferral = async (req, res) => {
  try {
    // const { referralId } = req.params;
    const { name, email, phone,referralId} = req.body;

    if (!referralId) {
      return res.status(400).json({ success: false, message: "Referral ID is required" });
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
// get referrals by sponsorId
const getOneReferral = async (req, res) => {
try{
    const {userId} = req.auth;
    if(!userId){
        return res.status(400).json({ success: false, message: "sponsorId is required" });
    }
    const referrals = await referralModel.find({ userId});
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
        const { status} = req.body;
        const {id} = req.params;
        if (!id) {
            return res.status(400).json({ success: false, message: "Referral ID is required" });
          }
            const referral = await referralModel.findById(id);
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
      const { id } = req.params;
  
      const referral = await referralModel.findById(id);
      if (!id) {
        return res.status(404).json({ success: false, message: "Referral not found" });
      }
  
      await referral.deleteOne();
  
      res.json({ success: true, message: "Referral deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
// download referrals as CSV file

import { Parser } from "json2csv";



// CSV download endpoint
const downloadReffarals = async (req, res) => {
  try {
        const {userId} = req.auth;
    if(!userId){
        return res.status(400).json({ success: false, message: "sponsorId is required" });
    }
    const referrals = await referralModel.find({ userId});

    const fields = ["name", "email", "phone", "status"];
    const opts = { fields };
    const parser = new Parser(opts);
    const csv = parser.parse(referrals);

    res.header("Content-Type", "text/csv");
    res.attachment("referrals.csv"); 
    return res.send(csv);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to export CSV" });
  }
};
// CSV download endpoint
const downloadAllReffarals = async (req, res) => {
  try {
const referrals = await referralModel.find().populate("userId", "name email");

    const fields = [
  { label: "Nom complet", value: "name" },
  { label: "Adresse email", value: "email" },
  { label: "Téléphone", value: "phone" },
  { label: "Statut", value: "status" },
  { label: "Parrain", value: "userId.name" }, 
  { label: "Email du parrain", value: "userId.email" },
];
    const opts = { fields };
    const parser = new Parser(opts);
    const csv = parser.parse(referrals);

    res.header("Content-Type", "text/csv");
    res.attachment("referrals.csv"); 
    return res.send(csv);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to export CSV" });
  }
};



export {addReferral,getOneReferral,getAllReferrals,updateReferralStatus, deleteReferral,downloadReffarals,downloadAllReffarals};
