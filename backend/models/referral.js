import mongoose from 'mongoose';

const referralSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['En attente', 'Validé', 'Rejeté'], 
    default: 'En attente' 
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
}, { timestamps: true });

// Check if model exists, otherwise create it
const Referral = mongoose.models.Referral || mongoose.model('referral', referralSchema);

export default Referral;

