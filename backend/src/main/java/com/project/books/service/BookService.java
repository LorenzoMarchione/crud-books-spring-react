package com.project.books.service;

import com.project.books.model.Book;
import com.project.books.repository.BookRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> getAll() {
        return bookRepository.findAll();
    }

    public Book save(Book book) {
        return bookRepository.save(book);
    }

    public void delete(Long id) {
        bookRepository.deleteById(id);

    }

    public Book updateBook(Long id, Book bookDetails) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Libro no encontrado con id " + id));

        // Actualizamos los campos
        if (bookDetails.getTitle() != null)
            book.setTitle(bookDetails.getTitle());

        if (bookDetails.getAuthor() != null)
            book.setAuthor(bookDetails.getAuthor());


        return bookRepository.save(book);
    }
}
