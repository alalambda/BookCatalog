/**
 * Created by anna.timoskina on 1/18/2016.
 */

Ext.define('BookCatalog.store.BookCatalogStore', {
    extend: 'Ext.data.Store',
    requires : [
        'BookCatalog.model.BookCatalogModel'
    ],
    model: 'BookCatalog.model.BookCatalogModel',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'rest',
        api: {
            create: 'book',
            read: 'book',
            destroy: 'book',
            update: 'book'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }

    }
});