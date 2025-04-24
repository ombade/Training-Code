package com.example.JDBC_CURD.controller;

import com.example.JDBC_CURD.Model.Book;
import com.example.JDBC_CURD.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Books")
public class BookController {
@Autowired
    BookService Service;
    @PostMapping
    public ResponseEntity<String> addBook(@RequestBody Book book) {
        Service.addBook(book);
        return ResponseEntity.ok("Book added successfully");
    }
    @GetMapping
    public List<Book> getAllBooks() {
        return Service.getAllBooks();
    }

    @GetMapping("/{id}")
    public Book getBook(@PathVariable Long id) {
        return Service.getBookById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateBook(@PathVariable Long id, @RequestBody Book book) {
        Service.updateBook(id, book);
        return ResponseEntity.ok("Book updated successfully");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBook(@PathVariable Long id) {
        Service.deleteBook(id);
        return ResponseEntity.ok("Book deleted successfully");
    }
}
