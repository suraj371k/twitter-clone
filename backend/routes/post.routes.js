import express from 'express'
import { protectRoute } from '../middlewares/protectRoute.js';
import { commentOnPost, createPost, deletePost, getAllPosts, getFollowingPosts, getLikedPosts, getUserPosts, likeUnlikePost } from '../controllers/post.controller.js';

const router = express.Router();


router.get("/all" , protectRoute , getAllPosts)

router.post('/create' , protectRoute , createPost)

router.delete('/:id' , protectRoute , deletePost)

router.post('/comment/:id' , protectRoute , commentOnPost)

router.post('/like/:id' , protectRoute , likeUnlikePost)

router.get('/likes/:id' , protectRoute , getLikedPosts)

router.get('/following' , protectRoute , getFollowingPosts)

router.get('/user/:username' , protectRoute , getUserPosts)
export default router;
