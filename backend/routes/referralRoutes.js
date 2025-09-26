import express from 'express';
import {addReferral,getOneReferral,getAllReferrals,updateReferralStatus,deleteReferral} from '../controller/referralController.js';


const referralRouter = express.Router();

referralRouter.post('/add',addReferral);
referralRouter.get('/get',getOneReferral);
referralRouter.get('/all',getAllReferrals);
referralRouter.put('/update',updateReferralStatus);
referralRouter.delete('/delete',deleteReferral);

export default referralRouter;