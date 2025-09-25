package com.project.books.controller;

import com.project.books.model.Book;
import com.project.books.service.BookService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping
    public List<Book> getAll() {
        return bookService.getAll();
    }

    @PostMapping
    public Book create(@RequestBody Book book) {
        return bookService.save(book);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        bookService.delete(id);
    }
}

