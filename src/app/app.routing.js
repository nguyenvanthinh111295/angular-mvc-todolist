"use strict";
var router_1 = require("@angular/router");
var items_component_1 = require("./item/items.component");
var home_component_1 = require("./home/home.component");
var label_component_1 = require("./label/label.component");
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'label',
        component: label_component_1.LabelComponent
    },
    {
        path: 'label/:Id',
        component: label_component_1.LabelComponent
    },
    {
        path: 'items',
        component: items_component_1.ItemsComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map