import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';

@Injectable({
    providedIn: 'root',
})
export class UserOrderService {
    private _orderListUrl: string = 'user_order_datatable';
    private _orderDetailUrl: string = 'user_order_detail';

    constructor(public _commonService: CommonService) {
        //
    }

    datatable(
        search: string | null,
        sort: string,
        order: string,
        offset: number,
        limit: number
    ): Observable<any> {
        let requestUrl = `${this._orderListUrl}?search=${search}&sort=${sort}&order=${order}&offset=${offset}&limit=${limit}`;
        if (search == null) {
            requestUrl = `${this._orderListUrl}?sort=${sort}&order=${order}&offset=${offset}&limit=${limit}`;
        }

        return this._commonService.datatable(
            requestUrl,
            search,
            sort,
            order,
            offset,
            limit
        );
    }

    get(id: number): Observable<any> {
        let requestUrl = `${this._orderDetailUrl}?id=${id}`;
        return this._commonService.get(requestUrl);
    }

    getUserOrder(id: number | undefined): Observable<any> {
        let requestUrl = `user_order?id=${id}`;
        return this._commonService.get(requestUrl);
    }
}
