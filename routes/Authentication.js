import express from "express";
import { getUsers, Register, Login, resetPassword, Logout } from "../controllers/Authentication.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const authRoutes = express.Router();

authRoutes.get("/users", verifyToken, getUsers);
authRoutes.post("/register", Register);
authRoutes.post("/login", Login);
authRoutes.get("/token", refreshToken);
authRoutes.post("/resetPassword", resetPassword);
authRoutes.delete("/logout", Logout);

export default authRoutes;
