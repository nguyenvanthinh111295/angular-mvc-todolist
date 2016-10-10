// import angular libraries
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import routing
import { routing } from './app.routing';

// import components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './item/items.component';
import { LabelComponent } from './label/label.component';

import { ControlMessagesComponent } from './control-messages.component';

// import services
import { ItemService } from './item/shared/item.service';
import { LabelService } from './label/shared/label.service';

import { ValidationService } from './validation.service';

// import materials
import { MdToolbarModule } from         '@angular2-material/toolbar'
import { MdSidenavModule } from         '@angular2-material/sidenav'
import { MdIconModule } from            '@angular2-material/icon'
import { MdIconRegistry } from          '@angular2-material/icon'
import { MdButtonToggleModule } from    '@angular2-material/button-toggle'
import { MdButtonModule } from          '@angular2-material/button'
import { MdListModule } from            '@angular2-material/list'
import { MdCardModule } from            '@angular2-material/card'
import { MdInputModule } from           '@angular2-material/input'
import { MdTooltipModule } from         '@angular2-material/tooltip'
import { MdProgressBarModule } from     '@angular2-material/progress-bar'
import { MdProgressCircleModule } from  '@angular2-material/progress-circle'
import { MdGridListModule } from        '@angular2-material/grid-list'

// import another libraries
import { Positioning } from 'angular2-bootstrap-confirm/position/';
import {ConfirmModule, ConfirmOptions, Position} from 'angular2-bootstrap-confirm';
const options: ConfirmOptions = new ConfirmOptions();


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        routing,
        MdToolbarModule.forRoot(),
        MdSidenavModule.forRoot(),
        MdIconModule.forRoot(),
        MdButtonToggleModule.forRoot(),
        MdListModule.forRoot(),
        MdButtonModule.forRoot(),
        MdCardModule.forRoot(),
        MdInputModule.forRoot(),
        MdTooltipModule.forRoot(),
        MdToolbarModule.forRoot(),
        MdProgressBarModule.forRoot(),
        MdProgressCircleModule.forRoot(),
        MdGridListModule.forRoot(),
        ConfirmModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ItemsComponent,
        LabelComponent,
        ControlMessagesComponent
    ],
    providers: [
        MdIconRegistry,
        ConfirmOptions, // for comfrirm dialog
        {provide: Position, useClass: Positioning}, // for comfrirm dialog
        ValidationService,
        ItemService,
        LabelService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
