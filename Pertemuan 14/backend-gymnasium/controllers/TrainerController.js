import Trainer from "../models/TrainerModel.js";

export const getTrainers = async (req, res) => {
    try {
        const response = await Trainer.findAll({
            // PENTING: Kita munculkan 'id' (angka) untuk dipakai saat buat kelas
            attributes: ['id', 'uuid', 'name', 'specialization', 'phone']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getTrainerById = async (req, res) => {
    try {
        const response = await Trainer.findOne({
            attributes: ['id', 'uuid', 'name', 'specialization', 'phone'],
            where: {
                uuid: req.params.id
            }
        });
        if(!response) return res.status(404).json({msg: "Trainer tidak ditemukan"});
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createTrainer = async (req, res) => {
    const { name, specialization, phone } = req.body;
    try {
        await Trainer.create({
            name: name,
            specialization: specialization,
            phone: phone
        });
        res.status(201).json({msg: "Trainer Berhasil Dibuat"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateTrainer = async (req, res) => {
    const trainer = await Trainer.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!trainer) return res.status(404).json({msg: "Trainer tidak ditemukan"});
    
    const { name, specialization, phone } = req.body;
    try {
        await Trainer.update({
            name: name,
            specialization: specialization,
            phone: phone
        },{
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json({msg: "Data Trainer Updated"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteTrainer = async (req, res) => {
    const trainer = await Trainer.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!trainer) return res.status(404).json({msg: "Trainer tidak ditemukan"});
    try {
        await Trainer.destroy({
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json({msg: "Trainer Deleted"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}