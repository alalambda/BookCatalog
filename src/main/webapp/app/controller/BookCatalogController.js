/**
 * Created by anna.timoskina on 1/18/2016.
 */

Ext.define('BookCatalog.controller.BookCatalogController', {
    extend: 'Ext.app.Controller',

    refs: [
        {selector: 'bookGridView',
            ref: 'bookGridView'},
        {selector: 'bookGridView button[action="add"]',
            ref: 'bookGridAdd'},
        {selector: 'bookGridView button[action="delete"]',
            ref: 'bookGridDelete'},
        {selector: 'searchBookView button[action="search"]',
            ref: 'searchBook'},
        {selector: 'addBookFormView',
            ref: 'addBookFormView'},
        {selector: 'bookCatalogView',
            ref: 'bookCatalogView'},
        {selector: 'addBookFormView textfield[name=name] ',
            ref: 'addBookFormName'},
        {selector: 'addBookFormView textfield[name=year]',
            ref: 'addBookFormYear'},
        {selector: 'addBookFormView button[action=save]',
            ref: 'addBookFormSave'}
    ],

    init: function () {
        this.control({
            'bookGridView  button[action=add]': {
                click: this.onAddBook
            },
            'bookGridView  button[action=delete]': {
                click: this.onDelBook
            },
            'searchBookView  textfield[name="search"]': {
                change: this.onChangeText
            },
            'bookGridView': {
                cellclick: this.onLineGrid
            },
            'addBookFormView  button[action=save]': {
                click: this.onSaveBook
            },
            'addBookFormView  textfield[name=name]': {
                change: this.onValidation
            },
            'addBookFormView  textfield[name=year]': {
                change: this.onValidation
            }
        });
    },

    onSaveBook: function (button) {
        //var me = this;
        var bookTitle = Ext.create('BookCatalog.model.BookCatalogModel');
        bookTitle.set(this.getAddBookFormView().down('form').getValues());
        bookTitle.save({
            success: function (operation, response) {
                var objAjax = operation.data;
                Ext.getStore('BookCatalogStore').add(objAjax);
                this.getAddBookFormView().close();
            },
            failure: function (dummy, result) {
                Ext.MessageBox.show({
                    title: 'Duplicate!',
                    msg: 'Book with this title and year already exists',
                    buttons: Ext.Msg.OK,
                    icon: Ext.Msg.ERROR
                });
            }

        });
    },

    onAddBook: function () {
        Ext.widget('addBookFormView');
    },

    onDelBook: function () {
        var sm = this.getBookGridView().getSelectionModel();
        var rs = sm.getSelection();
        this.getBookGridView().store.remove(rs[0]);
        this.getBookGridView().store.commitChanges();
        this.getBookGridDelete().disable();
    },

    onChangeText: function () {
        Ext.getStore('BookCatalogStore').load({
            params: {
                search: this.getBookCatalogView().down('searchBookView').getValues()
            }
        });
    },

    onLineGrid: function () {
        this.getBookGridDelete().enable();
    },

    onValidation: function () {
        if (this.getAddBookFormName().validate() && this.getAddBookFormYear().validate()) {
            this.getAddBookFormSave().enable();
        } else {
            this.getAddBookFormSave().disable();
        }
    }

});