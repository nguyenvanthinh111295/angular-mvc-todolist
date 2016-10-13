"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('rxjs/Rx');
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var ItemService = (function () {
    function ItemService(http) {
        this.http = http;
        this.itemsUrl = 'http://localhost:64017/api/items/'; // change this local host by your local host
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    ItemService.prototype.delete = function (item) {
        return this.http
            .delete((this.itemsUrl + 'DeleteItem') + "/" + item.Id, this.headers)
            .toPromise()
            .catch(this.handleError);
    };
    ItemService.prototype.getItems = function () {
        return this.http
            .get(this.itemsUrl, this.headers)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ItemService.prototype.post = function (item) {
        return this.http
            .post(this.itemsUrl, JSON.stringify(item), { headers: this.headers })
            .toPromise()
            .then(function () { return item; })
            .catch(this.handleError);
    };
    ItemService.prototype.save = function (item) {
        return this.post(item);
    };
    ItemService.prototype.getLabelItemsByLabelId = function (item) {
        return this.http
            .get((this.itemsUrl + 'GetLabelItems') + "/" + item.LabelId, this.headers)
            .toPromise()
            .catch(this.handleError);
    };
    ItemService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    };
    ItemService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=item.service.js.map