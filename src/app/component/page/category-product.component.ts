import { Component, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/product.interface';
import { ProductService } from 'src/app/service/product.service';
import { GlobalConstants as gData } from 'src/app/data/global-constants';
import { ListProductComponent } from '../list-product.component';
import { CategoryService } from 'src/app/service/category.service';
import { ICategory } from 'src/app/interface/category.interface';
import { CatScrollComponent } from '../cat-scroll.component';

@Component({
    selector: 'category-product-component',
    standalone: true,
    styles: [],
    template: `
        <style>
            .product-list-item {
            }
        </style>
        <div class="text-center text-amber-500 font-bold text-2xl my-5  ">
            {{ cat?.name | titlecase }}
        </div>
        <section>
            <cat-scroll-component [catItem]="subCat"></cat-scroll-component>
        </section>
        <div class="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6">
            <div class="product-list-item" *ngFor="let item of products">
                <list-product [product]="item"></list-product>
            </div>
        </div>
    `,
    imports: [CommonModule, ListProductComponent, CatScrollComponent],
})
export class CategoryProductComponent implements OnInit {
    catId: any = 0;
    cat: ICategory | undefined;
    subCat: ICategory[] = [];
    products: IProduct[] = [];
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _productService: ProductService,
        private _categoryService: CategoryService
    ) {
        _activatedRoute.params.subscribe((val) => {
            this.products = [];
            this.catId = val['id'];
            this._productService
                .getCategoryProducts(val['id'])
                .subscribe((data) => {
                    // console.log(data);
                    data.product.map((item: any) => {
                        let image_thumb =
                            gData.assetsBaseURL + item.image_thumb;
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
                });

            this._categoryService
                .getCategoryDetail(val['id'])
                .subscribe((data) => {
                    this.cat = data.category;
                });

            this._categoryService
                .getSubCategory(val['id'])
                .subscribe((data) => {
                    this.subCat = data.category;
                    console.log(this.subCat);
                });
        });
    }

    ngOnInit(): void {
        /* this.catId = this._route.snapshot.paramMap.get('id');
        this.products = [];
        this._productService
            .getCategoryProducts(this.catId)
            .subscribe((data) => {
                // console.log(data);
                data.product.map((item: any) => {
                    // let image_thumb = gData.assetsBaseURL + item.image_thumb;
                    let image_thumb =
                        'https://mart.bijoy.club/assets/media/product/7d9a64929df7d1cbffa14714ae6e956f_thumb.jpg';
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
    }
}
