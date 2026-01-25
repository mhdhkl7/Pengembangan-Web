import express from "express";
import {
    getTrainers,
    getTrainerById,
    createTrainer,
    updateTrainer,
    deleteTrainer
} from "../controllers/TrainerController.js";

const router = express.Router();

router.get('/trainers', getTrainers);
router.get('/trainers/:id', getTrainerById);
router.post('/trainers', createTrainer);
router.patch('/trainers/:id', updateTrainer);
router.delete('/trainers/:id', deleteTrainer);

export default router;