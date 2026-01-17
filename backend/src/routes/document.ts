import { Router } from "express";
import { Document } from "../../../shared/index.js";

const router = Router();

router.get("/", (_, res) => {
	const documents: Document[] = [
		{ id: 1, name: "Document A" },
		{ id: 2, name: "Document B" },
	];
	res.json(documents);
});

export default router;
