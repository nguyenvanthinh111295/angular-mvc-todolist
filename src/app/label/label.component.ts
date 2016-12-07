import { Component, OnInit, Input, Output, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MdDialog, MdDialogRef, MdSnackBar, MdSnackBarConfig } from '@angular/material';

import { Label } from './shared/label/';
import { LabelService } from './shared/label.service';
import { Item } from './../item/shared/item';
import { ItemService } from './../item/shared/item.service';
import { AppComponent } from './../app.component';
import { ItemsComponent } from './../item/items.component';
import { DialogService } from './../shared/dialog/dialog.service';
import { ItemDetailDialog } from './../item/itemDetail-dialog.component'

@Component({
    selector: 'labels',
    templateUrl: 'app/label/label.component.html',
})

export class LabelComponent implements OnInit {

    public labels: any[];
    private items: any[];
    @Input() label: Label;
    @Input() item: Item;
    selectedLabel: Label;
    toolbarTitle: string = "New label";
    labelForm: FormGroup;

    constructor(
        private labelService: LabelService,
        private itemService: ItemService,
        private dialogService: DialogService,
        private appComponent: AppComponent,
        private formBuilder: FormBuilder,
        private activedRoute: ActivatedRoute,
        private router: Router,
        public dialog: MdDialog,
        public snackBar: MdSnackBar,
        public viewContainerRef: ViewContainerRef) {
        this.labelForm = formBuilder.group({
            itemName: ['', [Validators.required, Validators.maxLength(250)]],
            itemContent: ''
        });
    }

    private InitialLabel() {
        this.label = new Label();
    }

    private InitialItem() {
        this.item = new Item();
    }

    private labelDetail() {
        this.activedRoute.params.subscribe(params => {
            if (params['Id'] !== undefined) {
                let labelId = +params['Id'];
                this.labelService
                    .getDetail(labelId)
                    .then(label => {
                        this.label = label.json();
                    })
            }
        });
    }

    private delete(label: Label) {
        this.labelService.getLabelsHaveItemById(label.Id)
            .then(labels => {
                this.labels = labels.json();
                if (this.labels.length > 0) {
                    this.snackBar.open("ERROR: This label own item. Therefore you can not delete it !", "close");
                }
                else {
                    this.labelService
                        .delete(label)
                        .then(label => {
                            this.appComponent.getAllLabel();
                            this.router.navigateByUrl('/');
                        });
                    this.successAttempt();
                }
            })
    }

    getLabelItems(item: Item) {
        this.activedRoute.params.subscribe(params => {
            if (params['Id'] !== undefined) {
                this.item.LabelId = +params['Id'];
                this.itemService.getLabelItemsByLabelId(item)
                    .then(items => this.items = items.json());
            }
        });
    }

    save() {
        if (this.labelForm.dirty && this.labelForm.valid) {
            this.item.LabelId = this.label.Id;
            this.itemService.save(this.item)
                .then(item => {
                    this.labelForm.reset();
                    this.getLabelItems(this.item);
                });
        }
    }

    deleteItem(item: Item) {
        var result = confirm("Do you want to delete this Item ?");
        if (result) {
            this.itemService
                .delete(item)
                .then(items => {
                    this.getLabelItems(item);
                });
        }
    }

    openItemDetail(item: Item) {
        let dialogRef: MdDialogRef<ItemDetailDialog>;
        
        dialogRef = this.dialog.open(ItemDetailDialog, {
            disableClose: false,
        });

        dialogRef.componentInstance.Name = item.Name;
        dialogRef.componentInstance.Content = item.Content;

        dialogRef.afterClosed().subscribe(result => {
            console.log('result: ' + result);
            dialogRef = null;
        });
    }

    confirmDialog() {
        this.dialogService
            .confirm('Confirm Dialog', `Are you sure you want to do delete "${this.label.Name}"`,
            this.viewContainerRef)
            .subscribe(result => {
                if (result) {
                    this.delete(this.label);
                }
            });
    }

    successAttempt() {
        let config = new MdSnackBarConfig();
        this.snackBar.open("SUCCESS: The label has been deleted!", "close");
    }

    ngOnInit() {
        this.InitialLabel();
        this.InitialItem();
        this.labelDetail();
        this.getLabelItems(this.item);
    }
}