/**
 * Created by Eva on 18.01.2016..
 */

Ext.define('BookCatalog.Application', {
    extend: 'Ext.app.Application',

    name: 'BookCatalogApp',

    stores: [
        // TODO: add global / shared stores here
    ],
    views: [
        'BookCatalog.view.Login',
        'BookCatalog.view.Main'
    ],
    launch: function () {

        // It's important to note that this type of application could use
        // any type of storage, i.e., Cookies, LocalStorage, etc.
        var loggedIn;

        // Check to see the current value of the localStorage key
        loggedIn = localStorage.getItem("BCLoggedIn");

        // This ternary operator determines the value of the TutorialLoggedIn key.
        // If TutorialLoggedIn isn't true, we display the login window,
        // otherwise, we display the main view
        Ext.widget(loggedIn ? 'app-main' : 'login');

    }
});
