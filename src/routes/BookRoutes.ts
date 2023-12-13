import express from "express";
import { CreateBookController } from "../controllers/book/CreateBookController";
import { UpdateBookController } from "../controllers/book/UpdateBookController";
import { GetBookController } from "../controllers/book/GetBookController";
import { GetBooksController } from "../controllers/book/GetBooksController";
import { DeleteBookController } from "../controllers/book/DeleteBookController";
import { CreateBookUseCase } from "../use-case/book/create-book-use-case/CreateBookUseCase";
import { DeleteBookUseCase } from "../use-case/book/delete-book-use-case/DeleteBookUseCase";
import { BookRepository } from "../repositories/book/BookRepository";
import { GetBookUseCase } from "../use-case/book/get-book-use-case/GetBookUseCase";

const bookRouter = express.Router();

const getBookUseCase = new GetBookUseCase();
const getBookController = new GetBookController(getBookUseCase);

const getBooksController = new GetBooksController();

const createBookUseCase = new CreateBookUseCase();
const createBookController = new CreateBookController(createBookUseCase);

const updateBookController = new UpdateBookController();

const deleteBookUseCase = new DeleteBookUseCase(new BookRepository());
const deleteBookController = new DeleteBookController(deleteBookUseCase);

bookRouter.get(
  "/book/:id",
  async (req, res) => await getBookController.handle(req, res)
);
bookRouter.get("/books", async (req, res) => {
  await getBooksController.handle(req, res);
});
bookRouter.post("/book", async (req, res) => {
  await createBookController.handle(req, res);
});
bookRouter.patch(
  "/book/:id",
  async (req, res) => await updateBookController.handle(req, res)
);
bookRouter.delete(
  "/book/:id",
  async (req, res) => await deleteBookController.handle(req, res)
);

export { bookRouter };
