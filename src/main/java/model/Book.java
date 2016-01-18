package model;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by anna.timoskina on 1/16/2016.
 */

@Entity
@Table(name = "books")
public class Book implements Serializable {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "author")
    private String author;

    @Column(name = "year")
    private int year;

    public Book() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAuthor() { return author; }

    public void setAuthor(String author) { this.author = author; }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

}