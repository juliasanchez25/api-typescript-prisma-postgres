import { PrismaClient } from "@prisma/client";
import { IRelateBookToAuthorRepository } from "./IRelateBookToAuthorRepository";
import { RelateBookToAuthorParams } from "./dtos/RelateBookToAuthorParams";

const prisma = new PrismaClient();

export class RelateBookToAuthorRepository
  implements IRelateBookToAuthorRepository
{
  async relateBookToAuthor(params: RelateBookToAuthorParams) {
    return prisma.book.update({
      where: { id: params.bookId },
      data: {
        authorId: params.authorId,
      },
    });
  }
}
