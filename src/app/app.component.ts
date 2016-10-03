import { Component, OnInit, Input } from '@angular/core';

import { Label } from './label/shared/label';
import { LabelService } from './label/shared/label.service';

@Component({
    selector: 'todolist-app',
    templateUrl: 'app/app.component.html',  
})

export class AppComponent implements OnInit {

    labels: Label[];
    @Input() label: Label;

    constructor(
        private labelService: LabelService) 
    { 
    }
    
    private InitialLabel()
    {
        this.label = new Label();
    }

    getAllLabel(){
        this.labelService
            .getLabels()
            .then(labels => this.labels = labels);
    }

    formLabel = false;

    openFormLabel(label: Label){
        this.formLabel = true;
        if(label !== null) {
            this.label = label;
        }
    }

    closeFormLabel(){
        this.formLabel = false;
        this.InitialLabel();
    }

    save(){
        if(this.label.Name) {
            this.labelService
            .save(this.label)
            .then(label => {
                this.getAllLabel();
                this.closeFormLabel();
            });
        }
    }

    ngOnInit()
    {   
        this.InitialLabel();
        this.getAllLabel();
    }
}

