import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CommonService } from './common.service';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    private _checkoutUrl: string = 'checkout';

    constructor(
        private http: HttpClient,
        private _router: Router,
        public _commonService: CommonService
    ) {
        //
    }

    checkout(reqData: any): Observable<any> {
        return this._commonService.post(this._checkoutUrl, reqData);
        //return this.http.post<any>(this._checkoutUrl, data);
        /* return this.http.post<any>(this._checkoutUrl, data, {
            observe: 'response',
        }); */
    }
}
