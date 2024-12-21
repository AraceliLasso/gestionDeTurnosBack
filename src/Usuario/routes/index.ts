import { Router } from "express";
import { createUsers, getUsers, deleteUsers } from "../usersController";


const router: Router = Router();


router.post("/users", createUsers)

router.get("/users")
router.delete("/users")

export default router;