import express from "express";
import {
    getClasses,
    getClassById,
    createClass,
    updateClass,
    deleteClass
} from "../controllers/ClassController.js";

const router = express.Router();

router.get('/classes', getClasses);
router.get('/classes/:id', getClassById);
router.post('/classes', createClass);
router.patch('/classes/:id', updateClass);
router.delete('/classes/:id', deleteClass);

export default router;