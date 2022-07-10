import express, { json } from "express";
import 'express-async-errors';
import cors from "cors";
import "dotenv/config";
import router from "./routes/index.js";
import errorHandlerMd from "./middlewares/errorHandlerMd.js";

const app = express();

app.use(cors());
app.use(json());

app.use(router);
app.use(errorHandlerMd);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
