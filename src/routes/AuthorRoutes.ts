import express from "express";
import { AuthorRepository } from "../repositories/author/AuthorRepository";
import { CreateAuthorController } from "../controllers/author/CreateAuthorController";
import { UpdateAuthorController } from "../controllers/author/UpdateAuthorController";
import { GetAuthorController } from "../controllers/author/GetAuthorController";
import { GetAuthorsController } from "../controllers/author/GetAuthorsController";
import { DeleteAuthorController } from "../controllers/author/DeleteAuthorController";
import { CreateAuthorUseCase } from "../use-case/author/create-author-use-case/CreateAuthorUseCase";
import { GetAuthorUseCase } from "../use-case/author/get-author-use-case/GetAuthorUseCase";
import { GetAuthorsUseCase } from "../use-case/author/get-authors-use-case/GetAuthorsUseCase";
import { DeleteAuthorUseCase } from "../use-case/author/delete-author-use-case/DeleteAuthorUseCase";
import { UpdateAuthorUseCase } from "../use-case/author/update-author-use-case/UpdateAuthorUseCase";

const authorRouter = express.Router();

const getAuthorUseCase = new GetAuthorUseCase();
const getAuthorController = new GetAuthorController(getAuthorUseCase);

const getAuthorsUseCase = new GetAuthorsUseCase();
const getAuthorsController = new GetAuthorsController(getAuthorsUseCase);

const createAuthorUseCase = new CreateAuthorUseCase();
const createAuthorController = new CreateAuthorController(createAuthorUseCase);

const updateAuthorUseCase = new UpdateAuthorUseCase();
const updateAuthorController = new UpdateAuthorController(updateAuthorUseCase);

const deleteAuthorUseCase = new DeleteAuthorUseCase(new AuthorRepository());
const deleteAuthorController = new DeleteAuthorController(deleteAuthorUseCase);

authorRouter.get(
  "/author/:id",
  async (req, res) => await getAuthorController.handle(req, res)
);
authorRouter.get(
  "/authors",
  async (req, res) => await getAuthorsController.handle(req, res)
);
authorRouter.post(
  "/author",
  async (req, res) => await createAuthorController.handle(req, res)
);
authorRouter.patch(
  "/author/:id",
  async (req, res) => await updateAuthorController.handle(req, res)
);
authorRouter.delete(
  "/author/:id",
  async (req, res) => await deleteAuthorController.handle(req, res)
);

export { authorRouter };
