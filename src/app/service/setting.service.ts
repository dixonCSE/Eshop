import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GlobalConstants as gData } from '../data/global-constants';

@Injectable({
    providedIn: 'root',
})
export class SettingService {
    constructor(private _http: HttpClient) {}

    getSettings(): Observable<any> {
        let api_url: string = gData.apiBaseURL + 'setting';
        return this._http.get<any>(api_url).pipe(
            map((data) => {
                return data.data;
            })
        );
    }
}
