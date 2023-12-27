import { PrismaClient } from "@prisma/client";
import { IBookRepository } from "./IBookRepository";
import { CreateBookParams } from "./dtos/CreateBookParams";
import { UpdateBookParams } from "./dtos/UpdateBookParams";
import { GetBookParams } from "./dtos/GetBookParams";
import { DeleteBookParams } from "./dtos/DeleteBookParams";
import { GetBooksParams } from "./dtos/GetBooksParams";

const prisma = new PrismaClient();

export class BookRepository implements IBookRepository {
  createBook = async (params: CreateBookParams) => {
    return prisma.book.create({
      data: params,
    });
  };

  updateBook = async ({ id, title, genre, description }: UpdateBookParams) => {
    return prisma.book.update({
      where: {
        id,
      },
      data: {
        title,
        genre,
        description,
      },
    });
  };

  getBook = async ({ id }: GetBookParams) => {
    return prisma.book.findUniqueOrThrow({
      where: {
        id,
      },
    });
  };

  getBooks = async ({ title, description, genre }: GetBooksParams) => {
    return prisma.book.findMany({
      where: {
        title: {
          contains: title,
        },
        description: {
          contains: description,
        },
        genre: {
          contains: genre,
        },
      },
    });
  };

  deleteBook = async ({ id }: DeleteBookParams) => {
    await prisma.book.delete({
      where: {
        id,
      },
    });
  };
}
