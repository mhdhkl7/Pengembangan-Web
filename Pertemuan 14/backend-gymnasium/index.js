import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";

// === ROUTE ===
import UserRoute from "./routes/UserRoute.js"; 
import AuthRoute from "./routes/AuthRoute.js";
import MemberRoute from "./routes/MemberRoute.js";
import TrainerRoute from "./routes/TrainerRoute.js";
import ClassRoute from "./routes/ClassRoute.js";

// === MODELS ===
import Users from "./models/UserModel.js";
import Members from "./models/MemberModel.js";
import Trainers from "./models/TrainerModel.js";
import Classes from "./models/ClassModel.js";

dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
});

(async()=>{
    await db.sync();
})();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

app.use(express.json());

// === DAFTARKAN ROUTE ===
app.use(UserRoute);  
app.use(AuthRoute);
app.use(MemberRoute);
app.use(TrainerRoute);
app.use(ClassRoute);

store.sync();

app.listen(process.env.APP_PORT || 5000, ()=> {
    console.log('Server Gymnasium berjalan di port 5000...');
});