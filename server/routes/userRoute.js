import express from "express"
import { fetch, create } from "../controller/userController.js"
const router = express.Router()
router.post("/addUser", create)
router.get("/showUsers", fetch)
export default router