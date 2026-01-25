// models/ClassModel.js
import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Trainers from "./TrainerModel.js"; // Import Trainer untuk relasi

const { DataTypes } = Sequelize;

const Classes = db.define('classes', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    name: {
        type: DataTypes.STRING, // Contoh: 'Yoga Pagi'
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    day: {
        type: DataTypes.STRING, // Contoh: 'Senin'
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    time: {
        type: DataTypes.STRING, // Contoh: '08:00 - 10:00'
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    trainerId: { // Relasi ke tabel Trainer
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    freezeTableName: true
});

// Relasi: Satu Trainer bisa mengajar banyak Kelas
Trainers.hasMany(Classes);
Classes.belongsTo(Trainers, {foreignKey: 'trainerId'});

export default Classes;