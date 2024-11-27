import dotenv from "dotenv";
dotenv.config();
import "./src/database";
import express from "express";
import home from "./src/routes/home";
import user from "./src/routes/user";
import tokenRoutes from "./src/routes/tokenRoutes";
import alunoRoutes from "./src/routes/alunoRoutes";
import fotoRoutes from "./src/routes/fotoRoutes";
import { resolve } from "path";
import cors from "cors";
import helmet from "helmet";

class App {
  constructor() {
    this.app = express();
    this.routes();
    this.middlewares();
  }

  middlewares() {
    this.app.use(
      cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
      })
    );

    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, "uploads")));
  }

  routes() {
    this.app.use("/", home);
    this.app.use("/users/", user);
    this.app.use("/tokens/", tokenRoutes);
    this.app.use("/alunos/", alunoRoutes);
    this.app.use("/fotos/", fotoRoutes);
  }
}

export default new App().app;
