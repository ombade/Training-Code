package com.example.JDBC_CURD.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;
@Data
@Component
@NoArgsConstructor
@AllArgsConstructor
public class Book {
    private Long id;
    private String title;
    private String author;
    private String genre;
    private Integer publishedYear;
    private Integer availableCopies;
    private Timestamp createdAt;
    private Timestamp updatedAt;
}
