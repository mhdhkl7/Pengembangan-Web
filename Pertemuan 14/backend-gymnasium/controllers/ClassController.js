// controllers/ClassController.js
import GymClass from "../models/ClassModel.js";
import Trainer from "../models/TrainerModel.js";

export const getClasses = async (req, res) => {
    try {
        const response = await GymClass.findAll({
            attributes: ['uuid', 'name', 'day', 'time', 'price'],
            include: [{
                model: Trainer,
                attributes: ['name', 'specialization']
            }]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getClassById = async (req, res) => {
    try {
        const response = await GymClass.findOne({
            where: {
                uuid: req.params.id
            },
            include: [{
                model: Trainer,
                attributes: ['name', 'specialization']
            }]
        });
        if(!response) return res.status(404).json({msg: "Kelas tidak ditemukan"});
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createClass = async (req, res) => {
    const { name, day, time, price, trainerId } = req.body; // trainerId dikirim dari frontend (dropdown)
    try {
        await GymClass.create({
            name: name,
            day: day,
            time: time,
            price: price,
            trainerId: trainerId
        });
        res.status(201).json({msg: "Kelas Gym Berhasil Dibuat"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateClass = async (req, res) => {
    const gymClass = await GymClass.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!gymClass) return res.status(404).json({msg: "Kelas tidak ditemukan"});
    
    const { name, day, time, price, trainerId } = req.body;
    try {
        await GymClass.update({
            name: name,
            day: day,
            time: time,
            price: price,
            trainerId: trainerId
        },{
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json({msg: "Data Kelas Berhasil Diupdate"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteClass = async (req, res) => {
    const gymClass = await GymClass.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!gymClass) return res.status(404).json({msg: "Kelas tidak ditemukan"});
    try {
        await GymClass.destroy({
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json({msg: "Kelas Berhasil Dihapus"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}