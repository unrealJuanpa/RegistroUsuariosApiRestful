import express from "express"
import { getAllCliente, getCliente, createCliente, updateCliente, deleteCliente } from "../controllers/ClienteController.js"

const router = express.Router()

router.get("/", getAllCliente);
router.get("/:id", getCliente);
router.post("/", createCliente);
router.put("/:id", updateCliente);
router.delete("/:id", deleteCliente);

export default router

