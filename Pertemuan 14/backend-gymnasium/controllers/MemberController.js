import Member from "../models/MemberModel.js";
import User from "../models/UserModel.js"; 

export const getMembers = async (req, res) => {
    try {
        const response = await Member.findAll({
            attributes: ['uuid', 'name', 'email', 'phone', 'gender', 'membershipType', 'status'],
            include: [{
                model: User,
                attributes: ['name', 'email'] 
            }]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getMemberById = async (req, res) => {
    try {
        const response = await Member.findOne({
            attributes: ['uuid', 'name', 'email', 'phone', 'gender', 'membershipType', 'status'],
            where: {
                uuid: req.params.id
            }
        });
        if(!response) return res.status(404).json({msg: "Member tidak ditemukan"});
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createMember = async (req, res) => {
    const { name, email, phone, gender, membershipType, status } = req.body;
    
    // === PERBAIKAN DI SINI ===
    // 1. Kita cari dulu User (Admin) yang sedang login berdasarkan Session UUID
    const user = await User.findOne({
        where: {
            uuid: req.session.userId
        }
    });

    // Jaga-jaga kalau session hilang atau user terhapus
    if(!user) return res.status(404).json({msg: "User tidak ditemukan. Silakan login ulang."});
    
    try {
        await Member.create({
            name: name,
            email: email,
            phone: phone,
            gender: gender,
            membershipType: membershipType,
            status: status,
            userId: user.id // <--- Kita ambil ID Angka (Integer), bukan UUID
        });
        res.status(201).json({msg: "Member Berhasil Didaftarkan"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateMember = async (req, res) => {
    const member = await Member.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!member) return res.status(404).json({msg: "Member tidak ditemukan"});
    
    const { name, email, phone, gender, membershipType, status } = req.body;
    try {
        await Member.update({
            name: name,
            email: email,
            phone: phone,
            gender: gender,
            membershipType: membershipType,
            status: status
        },{
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json({msg: "Data Member Berhasil Diupdate"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteMember = async (req, res) => {
    const member = await Member.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!member) return res.status(404).json({msg: "Member tidak ditemukan"});
    try {
        await Member.destroy({
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json({msg: "Member Berhasil Dihapus"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}