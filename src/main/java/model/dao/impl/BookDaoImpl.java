package model.dao.impl;


import model.Book;
import model.dao.BookDao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Collection;
import java.util.List;

/**
 * Created by anna.timoskina on 1/16/2016.
 */

@SuppressWarnings("unchecked")
public class BookDaoImpl implements BookDao {

    @PersistenceContext
    private EntityManager emf;

    @Override
    public void add(Book book) {
        emf.persist(book);
    }

    @Override
    public void update(Book book) {
        emf.merge(book);
    }

    @Override
    public void delete(Book book) {
        emf.remove(emf.getReference(Book.class, book.getId()));
    }

    @Override
    public Collection getBooks(String search) {
        if (null == search || search.trim().isEmpty()) {
            return emf.createQuery("select b from Book b")
                    .getResultList();
        }
        return emf.createQuery("select b from Book b where b.name like :search")
                .setParameter("search", search.trim() + "%")
                .getResultList();
    }

    public List<Book> findByBook(String name, String author) {
        //String q = "select b from Book b where b.name =:name and b.year =:year";
        return  //emf.createQuery(q)
                emf.createQuery("select b from Book b where b.name =:name and b.author =:author")
                .setParameter("name", name)
                .setParameter("author", author)
                .getResultList();
    }
}