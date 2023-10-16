import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';

import { MaterialModule } from '../material.module';
import { Slider } from '../service/slider.service';
import { GlobalConstants as gData } from '../data/global-constants';
import { BreakpointService } from '../service/breakpoint.service';

@Component({
    selector: 'image-slider',
    standalone: true,
    imports: [CommonModule, MaterialModule, NgImageSliderModule],
    styles: [],
    template: `
        <ng-image-slider
            #nav
            [images]="imageObject"
            [infinite]="true"
            [autoSlide]="0"
            [imageSize]="sliderSize"
        ></ng-image-slider>
    `,
})
export class SliderComponent implements OnInit {
    /* imageObject: Array<object> = [
        {
            image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
            thumbImage:
                'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
            title: 'Hummingbirds are amazing creatures',
        },
        {
            : 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
            thumbImage:
                'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
        },
    ]; */

    imageObject: object[] = [];

    displaySize: number = 4;
    sliderSize: { width: string; height: string } = {
        width: '350',
        height: '200',
    };

    constructor(
        private _breakpointService: BreakpointService,
        private _slider: Slider
    ) {}

    ngOnInit(): void {
        this._slider.getImages().subscribe((res) => {
            res.data.banner.map((item: any) => {
                let image = gData.assetsBaseURL + item.image;
                this.imageObject.push({
                    image: image,
                    thumbImage: image,
                });
            });
            // console.log(this.imageObject);
        });

        this.displaySize = this._breakpointService.getBreakpoint();
        if (this.displaySize >= 2) {
        } else {
            this.sliderSize = { width: '100%', height: '200' };
        }
    }
}
