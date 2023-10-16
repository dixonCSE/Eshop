import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { ListProductComponent } from './list-product.component';
import { ProductService } from '../service/product.service';
import { IProduct } from '../interface/product.interface';
import { GlobalConstants as gData } from '../data/global-constants';

@Component({
    selector: 'product-list',
    standalone: true,
    imports: [CommonModule, ListProductComponent],
    styles: [],
    template: `
        <style>
            .product-list-item {
            }
        </style>
        <div class="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6">
            <div class="product-list-item" *ngFor="let item of products">
                <list-product [product]="item"></list-product>
            </div>
        </div>
    `,
})
export class ProductListComponent implements OnInit {
    @Input()
    key_code!: string;

    products: IProduct[] = [];

    constructor(private _productService: ProductService) {}

    ngOnInit(): void {
        /* this._productService.getProducts().subscribe((data) => {
            //console.log(data);
            data.products.map((item: any) => {
                let image_thumb = gData.assetsBaseURL + item.image_thumb;
                // let image_thumb =
                //     'https://mart.bijoy.club/assets/media/product/7d9a64929df7d1cbffa14714ae6e956f_thumb.jpg';
                this.products.push({
                    id: item.id,
                    code: item.code,
                    name: item.name,
                    price: item.price,
                    old_price: item.old_price,
                    image_thumb: image_thumb,
                });
            });
        }); */

        this._productService
            .getDisplayProducts(this.key_code)
            .subscribe((data) => {
                data.products.map((item: any) => {
                    let image_thumb = gData.assetsBaseURL + item.image_thumb;
                    this.products.push({
                        id: item.id,
                        code: item.code,
                        name: item.name,
                        price: item.price,
                        old_price: item.old_price,
                        image_thumb: image_thumb,
                    });
                });
            });
    }
}
