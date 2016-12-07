import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
    selector: 'itemDetail-dialog',
    templateUrl: 'app/item/itemDetail-dialog.component.html'
})
export class ItemDetailDialog {

    public Name: string;
    public Content: string;

    constructor(public dialogRef: MdDialogRef<ItemDetailDialog>) { }
}