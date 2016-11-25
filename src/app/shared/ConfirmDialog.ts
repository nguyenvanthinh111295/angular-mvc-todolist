import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material'

@Component({
    moduleId: module.id,
    selector: 'confirm-dialog',
    templateUrl: 'ConfirmDialog.html'
})
export class ConfirmDialog {
    constructor(public dialogRef: MdDialogRef<ConfirmDialog>) {}
}