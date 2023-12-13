import "express-async-errors";
import express from "express";
import { bookRouter } from "./routes/BookRoutes";
import { authorRouter } from "./routes/AuthorRoutes";
import { relateBookToAuthorRouter } from "./routes/RelateBookToAuthorRoutes";

const app = express();
app.use(express.json());
app.use(bookRouter);
app.use(authorRouter);
app.use(relateBookToAuthorRouter);

export default app;
