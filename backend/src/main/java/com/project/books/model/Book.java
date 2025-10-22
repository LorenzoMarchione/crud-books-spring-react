package com.project.books.model;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String author;
    private String country;
    private String language;
    private String image;
    private String link;
    @Column(name = "image_link")
    private String imageLink;
    private String pages;
    private Integer year;

    @Column(name = "created_at")
    private Timestamp createdAt;
}
