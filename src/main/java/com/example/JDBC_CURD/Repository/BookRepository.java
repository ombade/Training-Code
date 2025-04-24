package com.example.JDBC_CURD.Repository;

import com.example.JDBC_CURD.Model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BookRepository {

    @Autowired
    JdbcTemplate JdbcTemplate;

    public int addBook(Book book)
    {
        String sql = "INSERT INTO books (title, author, genre, published_year, available_copies, created_at, updated_at) " +
                "VALUES (?, ?, ?, ?, ?, NOW(), NOW())";
        return JdbcTemplate.update(sql, book.getTitle(), book.getAuthor(), book.getGenre(),
                book.getPublishedYear(), book.getAvailableCopies());
    }

    public List<Book> getAllBooks()
    {
      return  JdbcTemplate.query("Select * from books",new BeanPropertyRowMapper<>(Book.class));
    }

    public Book getBookById(Long id)
    {
        String sql = "select * from books where id = ?";
        return JdbcTemplate.queryForObject(sql ,new BeanPropertyRowMapper<>(Book.class), id);

    }


    public int updateBook(Long id, Book book) {
        String sql = "UPDATE books SET title = ?, author = ?, genre = ?, published_year = ?, available_copies = ?, updated_at = NOW() WHERE id = ?";
        return JdbcTemplate.update(sql, book.getTitle(), book.getAuthor(), book.getGenre(), book.getPublishedYear(), book.getAvailableCopies(), id);
    }
    public int deleteBook(Long id) {
        return JdbcTemplate.update("DELETE FROM books WHERE id = ?", id);
    }

}
