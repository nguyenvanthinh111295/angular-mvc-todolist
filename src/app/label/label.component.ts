import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Label } from './shared/label/';
import { LabelService } from './shared/label.service';
import { Item } from './../item/shared/item';
import { ItemService } from './../item/shared/item.service';

import { AppComponent } from './../app.component';

@Component({
    selector: 'labels',
    templateUrl: 'app/label/label.component.html',
})

export class LabelComponent implements OnInit {

    public labels: Array<any>;
    @Input() label: Label;
    @Input() item: Item;
    selectedLabel: Label;
    toolbarTitle: string = "New label";

    labelForm: FormGroup;

    constructor(
        private labelService: LabelService,
        private itemService: ItemService,
        private formBuilder: FormBuilder,
        private appComponent: AppComponent,
        private activedRoute: ActivatedRoute,
        private router: Router) {
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
        var result = confirm("Do you want to delete this Label ?");
        if(result)
        {
            this.labelService
            .delete(label)
            .then(label => {
                this.appComponent.getAllLabel();
                this.router.navigateByUrl('/');
            });
            alert("deleted");
        }
    }

    items: any[];
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
        if(result)
        {
            this.itemService
            .delete(item)
            .then(items => {
                this.getLabelItems(item);
            });
        }
    }

    ngOnInit() {
        this.InitialLabel();
        this.InitialItem();
        this.labelDetail();
        this.getLabelItems(this.item);
    }
}