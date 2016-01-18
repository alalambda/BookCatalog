package service;

import model.Book;

import java.util.Collection;

/**
 * Created by anna.timoskina on 1/16/2016.
 */
public interface BookService {

    Boolean add(Book book);

    void update(Book book);

    Collection<Book> getBooks(String search);

    void delete(Book book);

}
