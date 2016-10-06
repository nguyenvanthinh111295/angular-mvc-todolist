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
// import routing
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
var toolbar_1 = require('@angular2-material/toolbar');
var sidenav_1 = require('@angular2-material/sidenav');
var icon_1 = require('@angular2-material/icon');
var icon_2 = require('@angular2-material/icon');
var button_toggle_1 = require('@angular2-material/button-toggle');
var button_1 = require('@angular2-material/button');
var list_1 = require('@angular2-material/list');
var card_1 = require('@angular2-material/card');
var input_1 = require('@angular2-material/input');
var tooltip_1 = require('@angular2-material/tooltip');
var progress_circle_1 = require('@angular2-material/progress-circle');
// import another libraries
var _1 = require('angular2-bootstrap-confirm/position/');
var angular2_bootstrap_confirm_1 = require('angular2-bootstrap-confirm');
var options = new angular2_bootstrap_confirm_1.ConfirmOptions();
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
                toolbar_1.MdToolbarModule.forRoot(),
                sidenav_1.MdSidenavModule.forRoot(),
                icon_1.MdIconModule.forRoot(),
                button_toggle_1.MdButtonToggleModule.forRoot(),
                list_1.MdListModule.forRoot(),
                button_1.MdButtonModule.forRoot(),
                card_1.MdCardModule.forRoot(),
                input_1.MdInputModule.forRoot(),
                tooltip_1.MdTooltipModule.forRoot(),
                toolbar_1.MdToolbarModule.forRoot(),
                progress_circle_1.MdProgressCircleModule.forRoot(),
                angular2_bootstrap_confirm_1.ConfirmModule
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                items_component_1.ItemsComponent,
                label_component_1.LabelComponent,
                control_messages_component_1.ControlMessagesComponent
            ],
            providers: [
                icon_2.MdIconRegistry,
                angular2_bootstrap_confirm_1.ConfirmOptions,
                { provide: angular2_bootstrap_confirm_1.Position, useClass: _1.Positioning },
                validation_service_1.ValidationService,
                item_service_1.ItemService,
                label_service_1.LabelService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map