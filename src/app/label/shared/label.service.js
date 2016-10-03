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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var LabelService = (function () {
    function LabelService(http) {
        this.http = http;
        this.labelsUrl = 'http://localhost:64017/api/labels';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    LabelService.prototype.getLabels = function () {
        return this.http
            .get(this.labelsUrl, this.headers)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    LabelService.prototype.post = function (label) {
        return this.http
            .post(this.labelsUrl, JSON.stringify(label), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    LabelService.prototype.put = function (label) {
        return this.http
            .put((this.labelsUrl + "/" + "PutLabel") + "/" + label.Id, JSON.stringify(label), { headers: this.headers })
            .toPromise()
            .then(function () { return label; })
            .catch(this.handleError);
    };
    LabelService.prototype.save = function (label) {
        if (label.Id)
            return this.put(label);
        else
            return this.post(label);
    };
    LabelService.prototype.delete = function (label) {
        return this.http
            .delete((this.labelsUrl + "/" + "DeleteLabel") + "/" + label.Id, this.headers)
            .toPromise()
            .catch(this.handleError);
    };
    LabelService.prototype.getDetail = function (labelId) {
        return this.http
            .get((this.labelsUrl + "/" + "GetLabel") + "/" + labelId, this.headers)
            .toPromise()
            .catch(this.handleError);
    };
    LabelService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    };
    LabelService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LabelService);
    return LabelService;
}());
exports.LabelService = LabelService;
//# sourceMappingURL=label.service.js.map