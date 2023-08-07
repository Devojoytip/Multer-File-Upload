import express from 'express';
import { uploadFile,getFile } from '../controllers/file_controller.js';
import storage from '../middlewares/upload.js';

const route = express.Router();

// File upload routes
route.post('/file/upload', storage.single('file'), uploadFile);
route.get('/file/:filename', getFile);

export default route;
