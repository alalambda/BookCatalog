/**
 * Created by anna.timoskina on 1/18/2016.
 */

Ext.define('BookCatalog.model.BookCatalogModel', {
    extend: 'Ext.data.Model',
    fields: ['name', 'year'],
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