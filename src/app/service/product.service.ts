import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GlobalConstants as gData } from '../data/global-constants';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private _http: HttpClient) {}

    getProducts(): Observable<any> {
        let api_url: string = gData.apiBaseURL + 'demo_product';
        return this._http.get<any>(api_url).pipe(
            map((data) => {
                return data;
            })
        );
    }

    getProduct(id: number): Observable<any> {
        let api_url: string = gData.apiBaseURL + 'get_product?id=' + id;
        return this._http.get<any>(api_url).pipe(
            map((data) => {
                return data.data;
            })
        );
    }

    getCategoryProducts(id: number): Observable<any> {
        let api_url: string =
            gData.apiBaseURL + 'get_category_product?id=' + id;
        return this._http.get<any>(api_url).pipe(
            map((data) => {
                return data.data;
            })
        );
    }

    searchProduct(key?: string): Observable<any> {
        let api_url: string = gData.apiBaseURL + 'search_product?key=' + key;
        return this._http.get<any>(api_url).pipe(
            map((data) => {
                return data.data;
            })
        );
    }
}
