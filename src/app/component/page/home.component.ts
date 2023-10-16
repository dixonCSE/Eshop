import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterLink } from '@angular/router';
import { ProductListComponent } from '../product-list.component';
import { CategoryService } from 'src/app/service/category.service';
import { CatScrollComponent } from '../cat-scroll.component';
import { SliderComponent } from '../slider.component';
import { ProductService } from 'src/app/service/product.service';

@Component({
    selector: 'home-component',
    standalone: true,
    imports: [
        CommonModule,
        ProductListComponent,
        RouterLink,
        CatScrollComponent,
        SliderComponent,
    ],
    styles: [],
    template: `
        <style>
            .twg {
                background-color: brown;
            }
            a {
                text-decoration: none;
            }
        </style>

        <section>
            <image-slider></image-slider>
        </section>

        <section>
            <cat-scroll-component
                [catItem]="parent_category"
            ></cat-scroll-component>
        </section>

        <section *ngFor="let item of displayView">
            <div class="text-center text-amber-500 font-bold text-2xl my-5  ">
                {{ item.name }}
            </div>
            <product-list [key_code]="item.key_code"></product-list>
            <div>
                <div></div>
                <div>view all</div>
            </div>
        </section>

        <!-- <section>
            <div class="text-center text-amber-500 font-bold text-2xl my-5  ">
                Best Product
            </div>
            <product-list key_code="best_sale"></product-list>
        </section> -->

        <section class="mt-8 px-1 py-2 bg-slate-500  text-center">
            <a
                routerLink="/privacy-policy"
                href="/privacy-policy"
                class="text-orange-200"
            >
                privacy policy</a
            >
        </section>
    `,
})
export class HomeComponent implements OnInit {
    parent_category: any;
    displayView: any;

    constructor(
        private _categoryService: CategoryService,
        private _productService: ProductService
    ) {}

    ngOnInit(): void {
        this._categoryService.getCategory().subscribe((res) => {
            this.parent_category = res.data.category;
        });

        this._productService.getDisplayView().subscribe((res) => {
            this.displayView = res.data;
        });
    }
}
