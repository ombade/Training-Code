package com.example.JDBC_CURD.Service;

import com.example.JDBC_CURD.Model.Book;
import com.example.JDBC_CURD.Repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {
    @Autowired
    private BookRepository repository;

    public int addBook(Book book) {
        return repository.addBook(book);
    }
    public List<Book> getAllBooks() {
        return repository.getAllBooks();
    }
    public int updateBook(Long id, Book book) {
        return repository.updateBook(id, book);
    }
    public int deleteBook(Long id) {
        return repository.deleteBook(id);
    }
    public Book getBookById(Long id) {
        return repository.getBookById(id);
    }
}
