import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {Http, Headers} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class ItemService {

    private http: Http;
    constructor(http: Http) {
        this.http = http;    
    }

    public getItems():any{
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");

        let url = "http://localhost:64017/api/items";
        return this.http.get(url, {headers: headers})
        .toPromise()
        .then((response: any) => this.handleResponse(response));
    }

    private handleResponse(response: any){
        console.log(response);
        return response.json();
    }

}