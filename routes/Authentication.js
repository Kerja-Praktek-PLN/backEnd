import express from "express";
import { getUsers, Register, Login, resetPassword, Logout, updateUsers, deleteUsers } from "../controllers/Authentication.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const authRoutes = express.Router();

authRoutes.get("/users", getUsers);
authRoutes.post("/register", Register);
authRoutes.post("/login", Login);
authRoutes.patch("/edit/:id", updateUsers);
authRoutes.get("/token", refreshToken);
authRoutes.post("/resetPassword", resetPassword);
authRoutes.delete("/logout", Logout);
authRoutes.delete("/delete/:id", deleteUsers);
export default authRoutes;
