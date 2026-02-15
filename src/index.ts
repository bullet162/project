import express from "express";
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get("/test", (req, res) => {
	res.status(200).send({ message: ["healthy", 200] });
});


app.listen(PORT, () => {
	console.log(`Server listening: http://localhost:${PORT}`);
});
