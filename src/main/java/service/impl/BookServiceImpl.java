package service.impl;

import model.Book;
import model.dao.BookDao;
import org.springframework.transaction.annotation.Transactional;
import service.BookService;

import java.util.Collection;
import java.util.List;

/**
 * Created by anna.timoskina on 1/16/2016.
 */

public class BookServiceImpl implements BookService {

    private BookDao bookDao;

    public BookDao getBookDao() {

        return bookDao;
    }

    public void setBookDao(BookDao bookDao) {
        this.bookDao = bookDao;
    }

    @Transactional
    @Override
    @SuppressWarnings("unchecked")
    public Boolean add(Book book) {
        List<Book> duplicate = bookDao.findByBook(book.getName(), book.getAuthor());
        if (duplicate.isEmpty()) {
            bookDao.add(book);
            return true;
        }
        return false;
    }

    @Transactional
    @Override
    public void update(Book book) {

        bookDao.update(book);
    }

    @Transactional
    @Override
    public Collection<Book> getBooks(String search) {

        return bookDao.getBooks(search);
    }

    @Transactional
    @Override
    public void delete(Book book) {

        bookDao.delete(book);
    }

}