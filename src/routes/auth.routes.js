import { Router } from "express";
import { autenticarUsuario, listarUsuuarios, registrarRecompensaBoveda } from "../controllers/auth.controller.js";
import { autenticarLocal, autenticarJWT, autorizarAdmin } from "../middlewares/auth.middleware.js";
import { validarLogin, validarRecompensa } from "../validators/auth.validator.js";

export const authRouter = Router();

authRouter.post("/user/authenticate", validarLogin, autenticarLocal, autenticarUsuario);
authRouter.get("/user/list", autenticarJWT, listarUsuarios);
authRouter.post("/boveda/recompensa", autenticarJWT, autorizarAdmin, validarRecompensa, registrarREcompensaBoveda);