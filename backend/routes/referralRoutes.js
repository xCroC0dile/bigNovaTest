import express from 'express';
import {addReferral,getOneReferral,getAllReferrals,updateReferralStatus,deleteReferral, downloadReffarals, downloadAllReffarals} from '../controller/referralController.js';
import authUser from '../middlewares/authMiddleware.js';
import adminAuth from '../middlewares/adminMiddleware.js';


const referralRouter = express.Router();

referralRouter.post('/add',addReferral);
referralRouter.get('/get',authUser,getOneReferral);
referralRouter.get('/download',authUser,downloadReffarals);
referralRouter.get('/downloadall',adminAuth,downloadAllReffarals);
referralRouter.get('/all',adminAuth,getAllReferrals);
referralRouter.put('/update/:id',adminAuth,updateReferralStatus);
referralRouter.delete('/delete/:id',adminAuth,deleteReferral);

export default referralRouter;