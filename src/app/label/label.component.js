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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var material_1 = require("@angular/material");
var label_1 = require("./shared/label");
var label_service_1 = require("./shared/label.service");
var item_1 = require("./../item/shared/item");
var ItemColor_1 = require("./../item/ItemColor");
var item_service_1 = require("./../item/shared/item.service");
var app_component_1 = require("./../app.component");
var dialog_service_1 = require("./../shared/dialog/dialog.service");
var snackBar_Service_1 = require("./../shared/notification/snackBar.Service");
var MessageTypes_1 = require("./../shared/notification/MessageTypes");
var itemDetail_dialog_component_1 = require("./../item/itemDetail-dialog.component");
var LabelComponent = (function () {
    function LabelComponent(labelService, itemService, dialogService, snackBarService, appComponent, formBuilder, activedRoute, router, dialog, snackBar, viewContainerRef) {
        this.labelService = labelService;
        this.itemService = itemService;
        this.dialogService = dialogService;
        this.snackBarService = snackBarService;
        this.appComponent = appComponent;
        this.formBuilder = formBuilder;
        this.activedRoute = activedRoute;
        this.router = router;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.viewContainerRef = viewContainerRef;
        this.toolbarTitle = "New label";
        this.labelForm = formBuilder.group({
            itemName: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(250)]],
            itemContent: ''
        });
    }
    LabelComponent.prototype.InitialLabel = function () {
        this.label = new label_1.Label();
    };
    LabelComponent.prototype.InitialItem = function () {
        this.item = new item_1.Item();
    };
    LabelComponent.prototype.InitialItemColour = function () {
        this.colour = [
            new ItemColor_1.ItemColor("White", "255, 255, 255"),
            new ItemColor_1.ItemColor("Red", "255, 138, 128"),
            new ItemColor_1.ItemColor("Orange", "255, 209, 128"),
            new ItemColor_1.ItemColor("Yellow", "255, 255, 141"),
        ];
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
        this.labelService.getLabelsHaveItemById(label.Id)
            .then(function (labels) {
            _this.labels = labels.json();
            if (_this.labels.length > 0) {
                _this.snackBarService.DisplayNotification(MessageTypes_1.MessageTypes.ERROR, "\"" + label.Name + "\" already exists items. Therefore you can not delete it !", 5000);
            }
            else {
                _this.labelService
                    .delete(label)
                    .then(function (label) {
                    _this.appComponent.getAllLabel();
                    _this.router.navigateByUrl('/');
                });
                _this.snackBarService.DisplayNotification(MessageTypes_1.MessageTypes.SUCCESS, "\"" + label.Name + "\" have deleted sucessfully !", 5000);
            }
        });
    };
    LabelComponent.prototype.getLabelItems = function (item) {
        var _this = this;
        this.activedRoute.params.subscribe(function (params) {
            if (params['Id'] !== undefined) {
                _this.item.LabelId = +params['Id'];
                _this.itemService.getLabelItemsByLabelId(item)
                    .then(function (items) { return _this.items = items.json(); });
            }
        });
    };
    LabelComponent.prototype.save = function () {
        var _this = this;
        if (this.labelForm.dirty && this.labelForm.valid) {
            this.item.LabelId = this.label.Id;
            this.itemService.save(this.item)
                .then(function (item) {
                _this.labelForm.reset();
                _this.getLabelItems(_this.item);
            });
        }
    };
    LabelComponent.prototype.deleteItem = function (item) {
        var _this = this;
        var result = confirm("Do you want to delete this Item ?");
        if (result) {
            this.itemService
                .delete(item)
                .then(function (items) {
                _this.getLabelItems(item);
            });
        }
    };
    LabelComponent.prototype.getRGBCode = function (color, item) {
        var _this = this;
        item.Color = color.RGBCode;
        this.itemService
            .updateItem(item)
            .then(function (items) {
            _this.getLabelItems(item);
        });
    };
    LabelComponent.prototype.softDeleteItem = function (item) {
        var _this = this;
        item.SoftDelete = true;
        this.itemService
            .updateItem(item)
            .then(function (items) {
            _this.getLabelItems(item);
        });
    };
    LabelComponent.prototype.openItemDetail = function (item) {
        var dialogRef;
        dialogRef = this.dialog.open(itemDetail_dialog_component_1.ItemDetailDialog, {
            disableClose: false,
        });
        dialogRef.componentInstance.Name = item.Name;
        dialogRef.componentInstance.Content = item.Content;
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('result: ' + result);
            dialogRef = null;
        });
    };
    LabelComponent.prototype.confirmDialog = function () {
        var _this = this;
        this.dialogService
            .confirm('Confirm Dialog', "Are you sure you want to do delete \"" + this.label.Name + "\"", this.viewContainerRef)
            .subscribe(function (result) {
            if (result) {
                _this.delete(_this.label);
            }
        });
    };
    LabelComponent.prototype.ngOnInit = function () {
        this.InitialLabel();
        this.InitialItem();
        this.labelDetail();
        this.getLabelItems(this.item);
        this.InitialItemColour();
    };
    return LabelComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", label_1.Label)
], LabelComponent.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", item_1.Item)
], LabelComponent.prototype, "item", void 0);
LabelComponent = __decorate([
    core_1.Component({
        selector: 'labels',
        templateUrl: 'app/label/label.component.html',
    }),
    __metadata("design:paramtypes", [label_service_1.LabelService,
        item_service_1.ItemService,
        dialog_service_1.DialogService,
        snackBar_Service_1.SnackBarService,
        app_component_1.AppComponent,
        forms_1.FormBuilder,
        router_1.ActivatedRoute,
        router_1.Router,
        material_1.MdDialog,
        material_1.MdSnackBar,
        core_1.ViewContainerRef])
], LabelComponent);
exports.LabelComponent = LabelComponent;
//# sourceMappingURL=label.component.js.map