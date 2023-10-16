import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GlobalConstants as gData } from '../data/global-constants';

@Injectable({
    providedIn: 'root',
})
export class Slider {
    constructor(private _http: HttpClient) {}

    getImages(): Observable<any> {
        let api_url: string = gData.apiBaseURL + 'get_slider_images';
        return this._http.get<any>(api_url).pipe(
            map((data) => {
                return data;
            })
        );
    }
}
