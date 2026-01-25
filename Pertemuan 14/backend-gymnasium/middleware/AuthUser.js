import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, "SECRET_PERTAMINA", (err, decoded) => {
        if (err) return res.sendStatus(403);
        req.role = decoded.role;
        next();
    });
};

export const isManager = (req, res, next) => {
    if (req.role !== "manager") {
        return res.status(403).json({ msg: "Akses Manager saja" });
    }
    next();
};

export const isPowerMan = (req, res, next) => {
    if (req.role !== "power_man" && req.role !== "manager") {
        return res.status(403).json({ msg: "Akses ditolak" });
    }
    next();
};
