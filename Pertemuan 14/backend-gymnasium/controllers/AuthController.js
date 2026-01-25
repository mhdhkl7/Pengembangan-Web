import User from "../models/UserModel.js";
import argon2 from "argon2";

export const Login = async (req, res) => {
    // 1. Cari user berdasarkan email
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    });
    // Jika tidak ketemu, return 404
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});

    // 2. Cek kecocokan password
    const match = await argon2.verify(user.password, req.body.password);
    if(!match) return res.status(400).json({msg: "Password Salah"});

    // 3. Simpan userId ke dalam session (ini yang membuat user 'login')
    req.session.userId = user.uuid;

    // 4. Ambil data penting untuk dikirim balik sebagai respon
    const uuid = user.uuid;
    const name = user.name;
    const email = user.email;
    const role = user.role;

    // Kirim respon sukses
    res.status(200).json({uuid, name, email, role});
}

export const Me = async (req, res) => {
    // Cek apakah ada session userId
    if(!req.session.userId){
        return res.status(401).json({msg: "Mohon login ke akun Anda!"});
    }
    // Jika ada, cari data user tersebut
    const user = await User.findOne({
        attributes: ['uuid', 'name', 'email', 'role'], // Jangan kirim password!
        where: {
            uuid: req.session.userId
        }
    });
    // Jika entah kenapa user di db hilang tapi session masih ada
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    
    res.status(200).json(user);
}

export const logOut = (req, res) => {
    // Hapus session
    req.session.destroy((err)=>{
        if(err) return res.status(400).json({msg: "Tidak dapat logout"});
        res.status(200).json({msg: "Anda telah logout"});
    });
}