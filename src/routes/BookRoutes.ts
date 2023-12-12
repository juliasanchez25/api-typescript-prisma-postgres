import express from "express";
import { CreateBookController } from "../controllers/CreateBookController";
import { UpdateBookController } from "../controllers/UpdateBookController";
import { GetBookController } from "../controllers/GetBookController";
import { GetBooksController } from "../controllers/GetBooksController";
import { DeleteBookController } from "../controllers/DeleteBookController";

const bookRouter = express.Router();
const getBookController = new GetBookController();
const getBooksController = new GetBooksController();
const createBookController = new CreateBookController();
const updateBookController = new UpdateBookController();
const deleteBookController = new DeleteBookController();

bookRouter.get("/:id", getBookController.handle);
bookRouter.get("/", getBooksController.handle);
bookRouter.post("/", createBookController.handle);
bookRouter.patch("/:id", updateBookController.handle);
bookRouter.delete("/:id", deleteBookController.handle);

export { bookRouter };
