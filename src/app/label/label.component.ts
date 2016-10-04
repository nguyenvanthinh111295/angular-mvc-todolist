import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmOptions, Position } from 'angular2-bootstrap-confirm';
import { Positioning } from 'angular2-bootstrap-confirm/position/';

import { Label } from './shared/label/';
import { LabelService } from './shared/label.service';

import { AppComponent  } from './../app.component';

const options: ConfirmOptions = new ConfirmOptions();
options.focusButton = 'confirm';

@Component({
    selector: 'labels',
    templateUrl: 'app/label/label.component.html',
})

export class LabelComponent implements OnInit {

    labelForm: FormGroup;
    public labels: Array<any>;
    @Input() label: Label;
    selectedLabel: Label;
    toolbarTitle: string = "New label"; 

    // for confirm dialog
    title: string = "Delete";
    message: string = 'Are you sure delete this Label ?';
    cancelClicked: boolean = false;
    isOpen: boolean = false;

    constructor(
        private labelService: LabelService,
        private formBuilder: FormBuilder,
        private appComponent: AppComponent,
        private activedRoute: ActivatedRoute,
        private router: Router) 
    { 
        // this.labelForm = formBuilder.group({
        //     name: ['', [Validators.required, Validators.maxLength(250)]]
        // });
    }
    
    private InitialLabel(){
        this.label = new Label();
    }

    private labelDetail()
    {
        this.activedRoute.params.subscribe(params =>{
            if(params['Id'] !== undefined) {
                let labelId = +params['Id'];
                this.labelService
                    .getDetail(labelId)
                    .then(label => {
                        this.label = label.json();
                    })
            }
        });
    }

    delete(label: Label){
        this.labelService
            .delete(label)
            .then(label => {
                this.appComponent.getAllLabel();
                this.router.navigateByUrl('/');
            });
    }

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

    ngOnInit() { 
        this.InitialLabel();
        this.labelDetail();
    }
}