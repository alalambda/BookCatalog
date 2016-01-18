/**
 * Created by anna.timoskina on 1/17/2016.
 */

Ext.application({
    name: 'BookCatalog',

    views: [
        'AddBookFormView',
        'BookCatalogView',
        'BookGridView',
        'SearchBookView'
    ],

    controllers : [
        'BookCatalogController'
    ],

    stores : [
        'BookCatalogStore'
    ],

    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype  : 'bookCatalogView'
            }
        });
    }
});