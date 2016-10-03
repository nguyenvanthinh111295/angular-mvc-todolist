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
var _1 = require('./shared/label/');
var label_service_1 = require('./shared/label.service');
var app_component_1 = require('./../app.component');
var LabelComponent = (function () {
    function LabelComponent(labelService, formBuilder, appComponent, activedRoute, router) {
        this.labelService = labelService;
        this.formBuilder = formBuilder;
        this.appComponent = appComponent;
        this.activedRoute = activedRoute;
        this.router = router;
        this.toolbarTitle = "New label";
        // this.labelForm = formBuilder.group({
        //     name: ['', [Validators.required, Validators.maxLength(250)]]
        // });
    }
    LabelComponent.prototype.InitialLabel = function () {
        this.label = new _1.Label();
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
    // private labelDetail()
    // {
    //     this.activedRoute.params.subscribe(params => {
    //         if(params['Id'] !== undefined) {
    //             this.toolbarTitle = "Edit label";
    //             let labelId = +params['Id'];
    //             this.labelService
    //                 .getDetail(labelId)
    //                 .then(label => {
    //                     this.label = label.json();
    //                 })
    //         }
    //     })
    // }
    // save(){
    //     if(this.labelForm.dirty && this.labelForm.valid) {
    //         this.labelService
    //         .save(this.label)
    //         .then(label => {
    //             this.appComponent.getAllLabel();
    //             this.labelForm.reset();
    //             this.router.navigateByUrl('/');
    //         });
    //     }
    // }
    LabelComponent.prototype.ngOnInit = function () {
        this.InitialLabel();
        this.labelDetail();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', _1.Label)
    ], LabelComponent.prototype, "label", void 0);
    LabelComponent = __decorate([
        core_1.Component({
            selector: 'labels',
            templateUrl: 'app/label/label.component.html',
        }), 
        __metadata('design:paramtypes', [label_service_1.LabelService, forms_1.FormBuilder, app_component_1.AppComponent, router_1.ActivatedRoute, router_1.Router])
    ], LabelComponent);
    return LabelComponent;
}());
exports.LabelComponent = LabelComponent;
//# sourceMappingURL=label.component.js.map