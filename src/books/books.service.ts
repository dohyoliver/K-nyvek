import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { findIndex } from 'rxjs';

@Injectable()
export class BooksService {
  books: Book[] = [
    {
      id:1,
      author:'A.A. Milne',
      title: 'Winnie the Pooh',
      isbn:'04240404',
      publihYear:1988,
      reserved:true,
    },
    { id:2,
      author:'A.A. Milne',
      title: 'Winnie the Pooh 2',
      isbn:'042404-04-1301',
      publihYear:2001,
      reserved:false,
    },
    { id:4,
      author:'Me',
      title: 'ASDASDASD',
      isbn:'04240404320303',
      publihYear:2023,
      reserved:false,
    },

  ];
  nextId = 5;
  create(createBookDto: CreateBookDto) {
    return 'This action adds a new book';
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return  this.books.find(book => book.id == id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    const index= this.books.findIndex(book => book.id ==id);
    if(index == -1){
      return false;
    }
    this.books.splice(index, 1);
    return true;
  }
}
