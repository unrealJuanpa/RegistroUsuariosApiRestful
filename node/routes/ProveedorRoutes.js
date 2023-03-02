import express from "express"
import { getAllProveedor, getProveedor, createProveedor, updateProveedor, deleteProveedor } from "../controllers/ProveedorController.js"

const router = express.Router()

router.get("/", getAllProveedor);
router.get("/:id", getProveedor);
router.post("/", createProveedor);
router.put("/:id", updateProveedor);
router.delete("/:id", deleteProveedor);

export default router

