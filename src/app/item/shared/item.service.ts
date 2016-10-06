import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';

import {Item} from './item';

@Injectable()
export class ItemService {

    private itemsUrl = 'http://localhost:64017/api/items';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getItems(): any {
        return this.http
            .get(this.itemsUrl, this.headers)
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    private post(item: Item): Promise<Item> {
        return this.http
            .post(this.itemsUrl,
            JSON.stringify(item),
            { headers: this.headers })
            .toPromise()
            .then(() => item)
            .catch(this.handleError);
    }

    save(item: Item): Promise<Item>{
        return this.post(item);
    }

    private handleError(error: any) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }
}