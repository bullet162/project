import express from "express";
import dotenv from 'dotenv';
import { bcryptRouter } from "./routes/bcrypt.route";


dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());


app.get("/test", (req, res) => {
	res.status(200).send({ message: ["healthy", 200] });
});

app.use("/security", bcryptRouter);

app.listen(PORT, () => {
	console.log(`Server listening: http://localhost:${PORT}`);
});
