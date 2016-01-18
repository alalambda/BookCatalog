package model.dao;

import model.Book;

import java.util.Collection;
import java.util.List;

/**
 * Created by anna.timoskina on 1/16/2016.
 */

public interface BookDao {

    void add(Book book);

    void update(Book book);

    void delete(Book book);

    Collection<Book> getBooks(String search);

    public List<Book> findByBook(String name, int year);

}