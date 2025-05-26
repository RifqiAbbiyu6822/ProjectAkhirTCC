import express from "express";
import { 
    getCameras, 
    getCameraById, 
    createCamera, 
    updateCamera, 
    deleteCamera 
} from "../controllers/cameraController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get('/', getCameras);
router.get('/:id', getCameraById);
router.post('/', protect, admin, createCamera);
router.patch('/:id', protect, admin, updateCamera);
router.delete('/:id', protect, admin, deleteCamera);

export default router;