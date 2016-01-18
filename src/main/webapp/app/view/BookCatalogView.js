/**
 * Created by anna.timoskina on 1/18/2016.
 */

Ext.define('BookCatalog.view.BookCatalogView', {
    extend: 'Ext.panel.Panel',
    width: 500,
    height: 360,
    padding: 10,
    alias: 'widget.bookCatalogView',
    layout: 'border',
    items: [
        {
            xtype: 'bookGridView',
            region: 'center'
        },
        {
            xtype: 'panel',
            html: '<div style="font: normal 18px cursive"><center><font size = "10">Book Catalog</font></center></div>',
            region: 'north',
            height: 80
        },
        {
            xtype: 'searchBookView',
            title: 'Search',
            region: 'west',
            width: 300,
            collapsible: true,
            collapsed: false
        }
    ],
    renderTo: Ext.getBody()
});