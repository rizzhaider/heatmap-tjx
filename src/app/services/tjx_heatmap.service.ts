import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable()
export class TjxHeatMapService {
    private baseURL = environment.baseURL;
    private getTjxHeatMapURL = this.baseURL + '/api-tjx/heatMapData';
    constructor(private http: Http) { }
    
    getTjxHeatMapData(storeId:any, storeDateStart:any, storeDateEnd:any) {
        let _getTjxHeatMapURL = this.getTjxHeatMapURL;
        _getTjxHeatMapURL = _getTjxHeatMapURL + '?startDate=' + storeDateStart + '&endDate=' + storeDateEnd + '&storeId=' + storeId;
        return this.http.get(_getTjxHeatMapURL)
            .pipe(map((response: Response) => {
                let data = response.json();
                return data;
            })).pipe(catchError((error: any) => Observable.throw(error.json().error || 'server error')));

    }
}
