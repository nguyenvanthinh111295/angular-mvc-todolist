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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routing_1 = require('./app.routing');
// import components
var app_component_1 = require('./app.component');
var home_component_1 = require('./home/home.component');
var items_component_1 = require('./item/items.component');
var label_component_1 = require('./label/label.component');
var control_messages_component_1 = require('./control-messages.component');
// import services
var item_service_1 = require('./item/shared/item.service');
var label_service_1 = require('./label/shared/label.service');
var validation_service_1 = require('./validation.service');
// import materials
var material_1 = require('@angular/material');
var ConfirmDialog_1 = require('./shared/ConfirmDialog');
// import another libraries
var AppModule = (function () {
    function AppModule() {
    }
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
                ConfirmDialog_1.ConfirmDialog
            ],
            providers: [
                validation_service_1.ValidationService,
                item_service_1.ItemService,
                label_service_1.LabelService
            ],
            entryComponents: [
                ConfirmDialog_1.ConfirmDialog
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map