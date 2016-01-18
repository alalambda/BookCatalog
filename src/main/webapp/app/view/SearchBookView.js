/**
 * Created by anna.timoskina on 1/18/2016.
 */

Ext.define('BookCatalog.view.SearchBookView', {
    extend: 'Ext.form.Panel',
    alias: 'widget.searchBookView',
    bodyPadding: 10,
    items: [
        {
            xtype: 'textfield',
            name: 'search',
            fieldLabel: 'Enter title',
            maxLength: 200
        }
    ]
});