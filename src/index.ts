import express from "express";
import dotenv from 'dotenv';
import { bcryptRouter } from "./routes/bcrypt.route";
import { hostname } from "node:os";

dotenv.config();

const PORT = Number(process.env.PORT) || 3000;
const app = express();

app.use(express.json());


app.get("/test", (req, res) => {
	res.status(200).send({ message: "Healthy", status: 200 });
});

app.use("/password", bcryptRouter);

const HOSTNAME = process.env.HOST || "localhost";
app.listen(PORT, HOSTNAME, () => {
	console.log(`Server listening: http://${HOSTNAME}:${PORT}`);
});