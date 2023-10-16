import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ListProductComponent } from '../list-product.component';
import { IProduct } from 'src/app/interface/product.interface';
import { ProductService } from 'src/app/service/product.service';
import { GlobalConstants as gData } from 'src/app/data/global-constants';

@Component({
    selector: 'search-component',
    standalone: true,
    imports: [CommonModule, ListProductComponent, RouterLink],

    styles: [],
    template: `
        <style>
            .list {
                display: flex;
                margin: 0.5rem 0.25rem;
                overflow: auto;
            }

            .list-element {
                margin: 0.25rem 0.33rem;
                min-width: fit-content;
                border: 2px solid #7348d7;
                border-radius: 0.25rem;
                padding: 0.5rem 1rem;
            }
        </style>

        <section>
            <div class="text-center text-amber-500 font-bold text-2xl my-5  ">
                Search Result
            </div>

            <div class="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6">
                <div class="product-list-item" *ngFor="let item of products">
                    <list-product [product]="item"></list-product>
                </div>
            </div>
            <div>
                <div></div>
                <div>view all</div>
            </div>
        </section>
    `,
})
export class SearchComponent implements OnInit {
    products: IProduct[] = [];
    searchKey: string | undefined;

    constructor(
        private _productService: ProductService,
        private _activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this._activatedRoute.params.subscribe((val) => {
            this.searchKey = val['str'];
            this._productService
                .searchProduct(this.searchKey)
                .subscribe((res) => {
                    //console.log(res.product);
                    res.product.map((item: any) => {
                        let image_thumb =
                            gData.assetsBaseURL + item.image_thumb;
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
        });
    }
}
