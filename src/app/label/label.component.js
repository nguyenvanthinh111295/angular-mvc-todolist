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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var angular2_bootstrap_confirm_1 = require('angular2-bootstrap-confirm');
var _1 = require('./shared/label/');
var label_service_1 = require('./shared/label.service');
var item_1 = require('./../item/shared/item');
var item_service_1 = require('./../item/shared/item.service');
var app_component_1 = require('./../app.component');
var options = new angular2_bootstrap_confirm_1.ConfirmOptions();
options.focusButton = 'confirm';
var LabelComponent = (function () {
    function LabelComponent(labelService, itemService, formBuilder, appComponent, activedRoute, router) {
        this.labelService = labelService;
        this.itemService = itemService;
        this.formBuilder = formBuilder;
        this.appComponent = appComponent;
        this.activedRoute = activedRoute;
        this.router = router;
        this.toolbarTitle = "New label";
        // for confirm dialog
        this.title = "Delete";
        this.message = 'Are you sure delete this Label ?';
        this.cancelClicked = false;
        this.isOpen = false;
        this.labelForm = formBuilder.group({
            itemName: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(250)]],
            itemContent: ''
        });
    }
    LabelComponent.prototype.InitialLabel = function () {
        this.label = new _1.Label();
    };
    LabelComponent.prototype.InitialItem = function () {
        this.item = new item_1.Item();
    };
    LabelComponent.prototype.labelDetail = function () {
        var _this = this;
        this.activedRoute.params.subscribe(function (params) {
            if (params['Id'] !== undefined) {
                var labelId = +params['Id'];
                _this.labelService
                    .getDetail(labelId)
                    .then(function (label) {
                    _this.label = label.json();
                });
            }
        });
    };
    LabelComponent.prototype.delete = function (label) {
        var _this = this;
        this.labelService
            .delete(label)
            .then(function (label) {
            _this.appComponent.getAllLabel();
            _this.router.navigateByUrl('/');
        });
    };
    LabelComponent.prototype.save = function () {
        var _this = this;
        if (this.labelForm.dirty && this.labelForm.valid) {
            this.item.LabelId = this.label.Id;
            this.itemService.save(this.item)
                .then(function (item) {
                _this.labelForm.reset();
                // re-load item list
            });
        }
    };
    LabelComponent.prototype.getAllItems = function () {
        var _this = this;
        this.itemService
            .getItems()
            .then(function (items) { return _this.items = items; });
    };
    LabelComponent.prototype.ngOnInit = function () {
        this.InitialLabel();
        this.InitialItem();
        this.labelDetail();
        this.getAllItems();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', _1.Label)
    ], LabelComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', item_1.Item)
    ], LabelComponent.prototype, "item", void 0);
    LabelComponent = __decorate([
        core_1.Component({
            selector: 'labels',
            templateUrl: 'app/label/label.component.html',
        }), 
        __metadata('design:paramtypes', [label_service_1.LabelService, item_service_1.ItemService, forms_1.FormBuilder, app_component_1.AppComponent, router_1.ActivatedRoute, router_1.Router])
    ], LabelComponent);
    return LabelComponent;
}());
exports.LabelComponent = LabelComponent;
//# sourceMappingURL=label.component.js.map