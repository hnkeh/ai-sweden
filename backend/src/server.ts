import cors from "cors";
import express from "express";
import { CLIENT_ORIGIN, PORT } from "./helpers/environment.js";
import documentRoutes from "./routes/document.js";

const app = express();

app.use(cors({
	origin: CLIENT_ORIGIN
}));

app.use(express.json());

app.use("/api/documents", documentRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
