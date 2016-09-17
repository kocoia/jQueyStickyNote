/* ========================================================================
 * jQueryStickyNote: abstractDbController.js v1.0.0
 *
 * ========================================================================
 * Copyright 2016
 * Licensed under MIT (https://github.com/keshikashvili-gio/jQueryStickyNote/master/LICENSE)
 * ======================================================================== */

+function ($) {
    'use strict';

    note.DbLocalStorageController = function (options) {
        this.options = options;
    };

    note.DbLocalStorageController.prototype = Object.create(note.DbController.prototype);

    note.DbLocalStorageController.prototype.constructor = note.DbLocalStorageController;

    note.DbLocalStorageController.prototype.save = function (data) {
        //console.log(data);
         this._saveToLocalStorage(data)
    };

    note.DbLocalStorageController.prototype.delete = function () {

    };

    note.DbLocalStorageController.prototype.deleteAll = function () {

    };

    note.DbLocalStorageController.prototype.update = function () {

    };

    note.DbLocalStorageController.prototype.updateAll = function () {

    };

    note.DbLocalStorageController.prototype.getData = function () {
        return this._getAllFromLocalStorage();
    };

    note.DbLocalStorageController.prototype._saveToLocalStorage = function (obj) {
        var data = this._getAllFromLocalStorage();
            data.push(obj);
        localStorage.setItem(this.options.localStorageKey, JSON.stringify(data));
    };

    note.DbLocalStorageController.prototype._getAllFromLocalStorage = function () {
        var storage = localStorage.getItem(this.options.localStorageKey);
        return storage ? JSON.parse(storage) : [];
    };

    note.DbLocalStorageController.prototype._getItemFromLocalStorage = function (key) {
        return this._getAllFromLocalStorage()[key];
    };


}(jQuery);
