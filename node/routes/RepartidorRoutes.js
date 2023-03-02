import express from "express"
import { getAllRepartidor, getRepartidor, createRepartidor, updateRepartidor, deleteRepartidor } from "../controllers/RepartidorController.js"

const router = express.Router()

router.get("/", getAllRepartidor);
router.get("/:id", getRepartidor);
router.post("/", createRepartidor);
router.put("/:id", updateRepartidor);
router.delete("/:id", deleteRepartidor);

export default router

