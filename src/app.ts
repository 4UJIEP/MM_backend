import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from "cors";

import userRoutes from "./modules/users/user.routes";

dotenv.config();

const app: Application = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Mucho gracias, amigos");
})

app.use("/api/users", userRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));