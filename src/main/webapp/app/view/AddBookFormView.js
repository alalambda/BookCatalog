/**
 * Created by anna.timoskina on 1/18/2016.
 */

Ext.define('BookCatalog.view.AddBookFormView', {
    extend: 'Ext.window.Window',
    alias: 'widget.addBookFormView',
    autoShow: true,
    layout: 'fit',
    modal: true,
    items: [
        {
            bodyPadding: 10,
            xtype: 'form',
            items: [
                {
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: 'Book Title',
                    allowBlank: false,
                    blankText: 'This field is mandatory'
                },
                {
                    xtype: 'textfield',
                    name: 'author',
                    fieldLabel: 'Author',
                    allowBlank: false,
                    blankText: 'This field is mandatory'
                },
                {
                    xtype: 'textfield',
                    name: 'year',
                    fieldLabel: 'Year',
                    regex: /^[1-9][0-9]{3}$/,
                    regexText: 'Invalid year',
                    allowBlank: false,
                    blankText: 'This field is mandatory'
                }
            ]
        }
    ],

    buttons: [
        {
            text: 'Save',
            action: 'save',
            disabled: true
        },
        {
            text: 'Cancel',
            handler: function () {
                this.up('window').close();
            }

        }
    ]
});
