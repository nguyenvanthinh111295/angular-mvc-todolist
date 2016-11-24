import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Label } from './label';

@Injectable()
export class LabelService {

    private labelsUrl = 'http://localhost:64017/api/labels';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getLabels(): any {
        return this.http
            .get(this.labelsUrl, this.headers)
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    private post(label: Label): Promise<Label> {
        return this.http
            .post(this.labelsUrl,
            JSON.stringify(label),
            { headers: this.headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    private put(label: Label): Promise<Label> {
        return this.http
            .put(`${this.labelsUrl + "/" + "PutLabel"}/${label.Id}`,
            JSON.stringify(label),
            { headers: this.headers })
            .toPromise()
            .then(() => label)
            .catch(this.handleError);
    }

    save(label: Label): Promise<Label> {

        if (label.Id)
            return this.put(label);
        else
            return this.post(label);
    }

    delete(label: Label) {
        return this.http
            .delete(`${this.labelsUrl + "/" + "DeleteLabel"}/${label.Id}`, this.headers)
            .toPromise()
            .catch(this.handleError);
    }

    getDetail(labelId: number) {
        return this.http
            .get(`${this.labelsUrl + "/" + "GetLabel"}/${labelId}`, this.headers)
            .toPromise()
            .catch(this.handleError);
    }

    getLabelsHaveItemById(labelId: number){
        return this.http
            .get(`${this.labelsUrl + "/" + "GetLabelsHaveItemById"}/${labelId}`, this.headers)
            .toPromise()
            .catch(this.handleError);
    }
    
    private handleError(error: any) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }
}
