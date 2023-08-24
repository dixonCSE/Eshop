import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GlobalConstants as gData } from '../data/global-constants';

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    constructor(private _http: HttpClient) {}

    getCategoryTree(): Observable<any> {
        let api_url: string = gData.apiBaseURL + 'category_tree';
        return this._http.get<any>(api_url).pipe(
            map((data) => {
                return data;
            })
        );
    }

    getSubCategory(id: number): Observable<any> {
        let api_url: string = gData.apiBaseURL + 'get_sub_category?id=' + id;
        return this._http.get<any>(api_url).pipe(
            map((data) => {
                return data.data;
            })
        );
    }

    getCategory(): Observable<any> {
        let api_url: string = gData.apiBaseURL + 'category';
        return this._http.get<any>(api_url).pipe(
            map((data) => {
                return data;
            })
        );
    }

    getCategoryDetail(id: number): Observable<any> {
        let api_url: string = gData.apiBaseURL + 'get_category?id=' + id;
        return this._http.get<any>(api_url).pipe(
            map((data) => {
                return data.data;
            })
        );
    }
}
