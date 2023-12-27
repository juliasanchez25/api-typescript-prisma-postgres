import { PrismaClient } from "@prisma/client";
import { IAuthorRepository } from "./IAuthorRepository";
import { CreateAuthorParams } from "./dtos/CreateAuthorParams";
import { UpdateAuthorParams } from "./dtos/UpdateAuthorParams";
import { GetAuthorParams } from "./dtos/GetAuthorParams";
import { DeleteAuthorParams } from "./dtos/DeleteAuthorParams";
import { GetAuthorsParams } from "./dtos/GetAuthorsParams";

const prisma = new PrismaClient();

export class AuthorRepository implements IAuthorRepository {
  createAuthor = async (params: CreateAuthorParams) => {
    return prisma.author.create({
      data: params,
    });
  };

  updateAuthor = async ({ id, email, name }: UpdateAuthorParams) => {
    return prisma.author.update({
      where: {
        id,
      },
      data: {
        email,
        name,
      },
    });
  };

  getAuthor = async ({ id }: GetAuthorParams) => {
    return prisma.author.findUniqueOrThrow({
      where: {
        id,
      },
    });
  };

  getAuthors = async ({ name, email }: GetAuthorsParams) => {
    return prisma.author.findMany({
      where: {
        name: {
          contains: name,
        },
        email: {
          contains: email,
        },
      },
    });
  };

  deleteAuthor = async ({ id }: DeleteAuthorParams) => {
    await prisma.author.delete({
      where: {
        id,
      },
    });
  };
}
