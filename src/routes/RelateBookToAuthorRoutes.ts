import express from "express";
import { RelateBookToAuthorController } from "../controllers/relateBookToAuthor/RelateBookToAuthorController";
import { RelateBookToAuthorUseCase } from "../use-case/relateBookToAuthor/RelateBookToAuthorUseCase";

const relateBookToAuthorRouter = express.Router();

const relateBookToAuthorUseCase = new RelateBookToAuthorUseCase();
const relateBookToAuthorController = new RelateBookToAuthorController(
  relateBookToAuthorUseCase
);

relateBookToAuthorRouter.patch(
  "/relateBookToAuthor",
  async (req, res) => await relateBookToAuthorController.handle(req, res)
);

export { relateBookToAuthorRouter };
