import { Component, Input } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
    moduleId: module.id,
    selector: 'confirm-dialog',
    templateUrl: 'confirm-dialog.html'
})
export class ConfirmDialog {
    public title: string;
    public message: string;
    constructor(public dialogRef: MdDialogRef<ConfirmDialog>) {}
}