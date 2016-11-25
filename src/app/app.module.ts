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
import { MaterialModule } from '@angular/material'

// import another libraries

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        routing,
        MaterialModule.forRoot()
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ItemsComponent,
        LabelComponent,
        ControlMessagesComponent,
    ],
    providers: [
        ValidationService,
        ItemService,
        LabelService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
