import express from "express";
import dotenv from 'dotenv';
import { bcryptRouter } from "./routes/bcrypt.route";
import mongoose from "mongoose";

dotenv.config();

const PORT = Number(process.env.PORT) || 3000;
const app = express();

app.use(express.json());


app.get("/test", (req, res) => {
	res.status(200).send({ message: "Healthy", status: 200 });
});

app.use("/password", bcryptRouter);

const MONGO_URI = String(process.env.MONGO_URL_DEV);

mongoose.connect(MONGO_URI)
	.then(() => console.log('MongoDB Connected via Docker!'))
	.catch((err) => console.error('MongoDB Connection Error:', err));


const HOSTNAME = process.env.HOST || "localhost";
app.listen(PORT, HOSTNAME, () => {
	console.log(`Server listening: http://${HOSTNAME}:${PORT}`);
});

