import "express-async-errors";
import express from "express";
import { bookRouter } from "./routes/BookRoutes";

const app = express();
app.use(express.json());
app.use(bookRouter);

export default app;
