import multer from "multer";
import { extname, resolve } from "path";

export default {
  storage: multer.diskStorage({
    destination: (req, res, cb) => {},
    filename: (req, res, cb) => {},
  }),
};
