// models/MemberModel.js
import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js"; // Kita import User untuk relasi

const { DataTypes } = Sequelize;

const Members = db.define('members', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true, // Email member boleh kosong jika mendaftar offline
        validate: {
            isEmail: true
        }
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    gender: {
        type: DataTypes.STRING, // 'Laki-laki' atau 'Perempuan'
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    membershipType: {
        type: DataTypes.STRING, // Contoh: 'Monthly', 'Yearly', 'VIP'
        defaultValue: "Monthly"
    },
    status: {
        type: DataTypes.STRING, // 'Active', 'Expired'
        defaultValue: "Active"
    },
    userId: { // Field untuk mencatat SIAPA Admin yang mendaftarkan member ini
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    freezeTableName: true
});

// Membuat Relasi: 1 User (Admin) bisa mendaftarkan Banyak Member
Users.hasMany(Members);
Members.belongsTo(Users, {foreignKey: 'userId'});

export default Members;