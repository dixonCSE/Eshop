import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { CategoryService } from 'src/app/service/category.service';
import { RouterLink } from '@angular/router';
import { CatScrollComponent } from '../cat-scroll.component';

@Component({
    selector: 'home-component',
    standalone: true,
    styles: [],
    template: `
        <style>
            .twg {
                background-color: brown;
            }
        </style>

        <section>
            <ng-image-slider
                #nav
                [images]="imageObject"
                [infinite]="true"
                [autoSlide]="1"
                [imageSize]="{ width: '100%', height: 200 }"
            ></ng-image-slider>
        </section>

        <section>
            <cat-scroll-component
                [catItem]="parent_category"
            ></cat-scroll-component>
        </section>

        <section>
            <div class="text-center text-amber-500 font-bold text-2xl my-5  ">
                Feature
            </div>
            <product-list></product-list>
            <div>
                <div></div>
                <div>view all</div>
            </div>
        </section>

        <section>
            <div class="text-center text-amber-500 font-bold text-2xl my-5  ">
                Best Sale
            </div>
            <product-list></product-list>
        </section>

        <section>
            <div class="text-center text-amber-500 font-bold text-2xl my-5  ">
                Offer Product
            </div>
            <product-list></product-list>
        </section>
    `,
    imports: [
        CommonModule,
        ProductListComponent,
        NgImageSliderModule,
        RouterLink,
        CatScrollComponent,
    ],
})
export class HomeComponent implements OnInit {
    imageObject: Array<object> = [
        {
            image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
            thumbImage:
                'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
            title: 'Hummingbirds are amazing creatures',
        },
        {
            image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
            thumbImage:
                'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
        },
        {
            image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
            thumbImage:
                'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
            title: 'Example with title.',
        },
        {
            image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
            thumbImage:
                'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
            title: 'Hummingbirds are amazing creatures',
        },
        {
            image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
            thumbImage:
                'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
        },
        {
            image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
            thumbImage:
                'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
            title: 'Example two with title.',
        },
    ];

    parent_category: any;

    constructor(private _categoryService: CategoryService) {}

    ngOnInit(): void {
        this._categoryService.getCategory().subscribe((data) => {
            this.parent_category = data.data.category;
        });
    }
}
