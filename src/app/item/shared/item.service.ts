import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';

import {Item} from './item';

@Injectable()
export class ItemService {

    private itemsUrl = 'http://localhost:64017/api/items/'; // change this local host by your local host
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    delete(item: Item){
        return this.http
            .delete(`${this.itemsUrl + 'DeleteItem'}/${item.Id}`, this.headers)
            .toPromise()
            .catch(this.handleError);
    }

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

    getLabelItemsByLabelId(item: Item): any{
        return this.http
            .get(`${this.itemsUrl + 'GetLabelItems'}/${item.LabelId}`, this.headers)
            .toPromise()
            .catch(this.handleError);
    }

    getItemById(item: Item): any{
        return this.http
            .get(`${this.itemsUrl + 'GetItemDetail'}/${item.Id}`)
    }

    updateItem(item: Item): Promise<Item>{
        return this.http
            .post(`${this.itemsUrl + "UpdateItem"}`,
            JSON.stringify(item),
            {headers: this.headers})
            .toPromise()
            .then(() => item)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }
}