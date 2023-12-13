import { Request, Response } from "express";
import { AuthorRepository } from "../../repositories/author/AuthorRepository";

export class UpdateAuthorController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const body = req.body;

    if (!id) {
      return res.status(400).json({
        message: "ID not send",
      });
    }

    const authorRepository = new AuthorRepository();

    try {
      const author = await authorRepository.updateAuthor({
        id: parseInt(id),
        ...body,
      });
      return res.status(200).json(author);
    } catch (err) {
      return res.status(404).json({
        message: "Author not found",
      });
    }
  }
}
