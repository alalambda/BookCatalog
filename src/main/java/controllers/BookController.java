package controllers;

import model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import service.BookService;

import java.util.Collection;

/**
 * Created by anna.timoskina on 1/16/2016.
 */

@Controller
@RequestMapping("/book")
public class BookController {

    @Autowired
    private BookService bookService;


    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public Collection<Book> getBooks(String search) {
        return bookService.getBooks(search);
    }

    @RequestMapping(method = RequestMethod.POST)
    @ResponseBody
    public ExtResult setBook(@RequestBody Book book) {
        return new ExtResult(bookService.add(book), book);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public String deleteBook(@RequestBody Book book, @PathVariable("id") String id) {
        bookService.delete(book);
        return "delete";
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    @ResponseBody
    public String updateBook(@RequestBody Book book, @PathVariable("id") String id) {
        bookService.update(book);
        return "update";
    }
}