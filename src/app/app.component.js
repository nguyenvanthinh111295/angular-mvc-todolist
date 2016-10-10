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
var label_1 = require('./label/shared/label');
var label_service_1 = require('./label/shared/label.service');
var AppComponent = (function () {
    function AppComponent(labelService) {
        var _this = this;
        this.labelService = labelService;
        this.isLoading = true;
        this.determinateValue = 0;
        this.formLabel = false;
        setInterval(function () {
            _this.determinateValue += 3;
            if (_this.determinateValue > 100) {
                _this.determinateValue = 30;
            }
        }, 100, 0, true);
    }
    AppComponent.prototype.InitialLabel = function () {
        this.label = new label_1.Label();
    };
    AppComponent.prototype.getAllLabel = function () {
        var _this = this;
        this.labelService
            .getLabels()
            .then(function (labels) { _this.labels = labels; });
    };
    AppComponent.prototype.openFormLabel = function (label) {
        this.formLabel = true;
        if (label !== null) {
            this.label = label;
        }
    };
    AppComponent.prototype.closeFormLabel = function () {
        this.formLabel = false;
        this.InitialLabel();
    };
    AppComponent.prototype.save = function () {
        var _this = this;
        if (this.label.Name) {
            this.labelService
                .save(this.label)
                .then(function (label) {
                _this.getAllLabel();
                _this.closeFormLabel();
            });
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.InitialLabel();
        this.getAllLabel();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', label_1.Label)
    ], AppComponent.prototype, "label", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'todolist-app',
            templateUrl: 'app/app.component.html',
        }), 
        __metadata('design:paramtypes', [label_service_1.LabelService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map