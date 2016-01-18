/**
 * Created by anna.timoskina on 1/18/2016.
 */

Ext.define('BookCatalog.view.BookGridView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.bookGridView',
    width: 400,
    height: 300,
    frame: true,
    store: 'BookCatalogStore',
    iconCls: 'icon-user',
    viewConfig:{
        markDirty:false
    },
    columns: [
        {
            text: 'Title',
            flex: 1,
            sortable: true,
            dataIndex: 'name',
            editor: {
                xtype:'textfield',
                allowBlank: false,
                blankText: 'This field is mandatory'
            }
        },
        {
            flex: 2,
            text: 'Year',
            sortable: true,
            dataIndex: 'year',
            editor: {
                xtype:'textfield',
                regex: /^([0-9]{1,20})*$/, // необходимо добавить сюда нужное регулярное выражение
                regexText: 'Invalid year',
                allowBlank: false,
                blankText: 'This field is mandatory'
            }
        }
    ],
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2,
            saveBtnText: 'Save',
            cancelBtnText: 'Cancel'
        })
    ],
    selType: 'rowmodel',
    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                {
                    text: 'Add',
                    action: 'add',
                    iconCls: 'icon-add'
                },
                '-',
                {
                    action: 'delete',
                    text: 'Delete',
                    iconCls: 'icon-delete',
                    disabled: true
                }
            ]
        }
    ]
});