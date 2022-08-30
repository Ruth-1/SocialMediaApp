import express from 'express';
import {getPosts, createPost} from '../controllers/posts.js'
const router = express.Router();
router.get('/',getPosts ); //request and response
router.get('/',createPost ); 
export default router;
