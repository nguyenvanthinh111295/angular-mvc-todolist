import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import {ItemService}        from './shared/item.service';

@Component({
    selector: 'items',
    templateUrl: 'app/item/items.component.html'
})

export class ItemsComponent implements OnInit{
    public items: Array<any>;
    
    constructor(itemService: ItemService) { 
        let self: ItemsComponent = this;
        itemService.getItems().then(function (responseItem:any) {
            self.items = responseItem;
        });
    }

    ngOnInit() { }
}