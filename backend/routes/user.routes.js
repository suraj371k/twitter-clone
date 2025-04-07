import express from 'express'
import { followUnfollowUser, getSuggestedUser, getUserProfile, updateUser } from '../controllers/user.controller.js';
import { protectRoute } from '../middlewares/protectRoute.js';

const router = express.Router()


router.get('/profile/:username', protectRoute , getUserProfile)
router.post('/follow/:id',protectRoute , followUnfollowUser)
router.get('/suggested' , protectRoute , getSuggestedUser)
router.post('/update' , protectRoute , updateUser)
export default router;