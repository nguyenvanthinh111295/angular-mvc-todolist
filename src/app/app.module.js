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
// import angular libraries
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_1 = require("./app.routing");
// import components
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var items_component_1 = require("./item/items.component");
var label_component_1 = require("./label/label.component");
var control_messages_component_1 = require("./shared/message/control-messages.component");
// import services
var item_service_1 = require("./item/shared/item.service");
var label_service_1 = require("./label/shared/label.service");
var validation_service_1 = require("./shared/message/validation.service");
var dialog_service_1 = require("./shared/dialog/dialog.service");
// import materials
var material_1 = require("@angular/material");
var confirm_dialog_1 = require("./shared/dialog/confirm-dialog");
var itemDetail_dialog_component_1 = require("./item/itemDetail-dialog.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            app_routing_1.routing,
            material_1.MaterialModule.forRoot()
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            items_component_1.ItemsComponent,
            label_component_1.LabelComponent,
            control_messages_component_1.ControlMessagesComponent,
            confirm_dialog_1.ConfirmDialog,
            itemDetail_dialog_component_1.ItemDetailDialog
        ],
        providers: [
            validation_service_1.ValidationService,
            item_service_1.ItemService,
            label_service_1.LabelService,
            dialog_service_1.DialogService
        ],
        entryComponents: [
            confirm_dialog_1.ConfirmDialog,
            itemDetail_dialog_component_1.ItemDetailDialog
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map