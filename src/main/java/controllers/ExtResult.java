package controllers;

import model.Book;

/**
 * Created by anna.timoskina on 1/16/2016.
 */
public class ExtResult {
    private boolean success;
    private Book data;


    public ExtResult(boolean success, Book data) {
        this.success = success;
        this.data = data;
    }

    public ExtResult() {
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public Book getData() {
        return data;
    }

    public void setData(Book data) {
        this.data = data;
    }
}