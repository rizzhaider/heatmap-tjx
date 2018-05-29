import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class TjxMinMaxDateService {
    private baseURL = environment.baseURL;
    private getTjxMinMaxDateURL = this.baseURL + '/api-tjx/max-min-date';
    constructor(private http: Http) { }    
     getTjxMinMaxDate(storeId:any) {
          let _getTjxMinMaxDateURL = this.getTjxMinMaxDateURL;
        _getTjxMinMaxDateURL = _getTjxMinMaxDateURL + '?storeId=' + storeId;
        return this.http.get(_getTjxMinMaxDateURL)
            .pipe(map((response: Response) => {
                let data = response.json();
                return data;
            })).pipe(catchError((error: any) => Observable.throw(error.json().error || 'server error')));


        }
     
        
       

}
