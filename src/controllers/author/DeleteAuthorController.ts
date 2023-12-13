import { Request, Response } from "express";
import { AuthorRepository } from "../../repositories/author/AuthorRepository";

export class DeleteAuthorController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        message: "ID not send",
      });
    }

    const authorRepository = new AuthorRepository();

    try {
      await authorRepository.deleteAuthor({ id: parseInt(id) });
      return res.status(200).json({
        message: "Author deleted successfully",
      });
    } catch (err) {
      return res.status(404).json({
        message: "Author not found",
      });
    }
  }
}
