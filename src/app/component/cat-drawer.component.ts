import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';

@Component({
    selector: 'cat-drawer',
    styles: [],
    template: `
        <ng-container *ngFor="let ItemLv0 of categories">
            <cat-drawer-item
                [category]="ItemLv0"
                [level]="level"
            ></cat-drawer-item>
        </ng-container>
    `,
})
export class CatDrawerComponent implements OnInit {
    //categories: any = null;

    @Input() categories: any;

    level: number = 1;

    constructor() {}

    ngOnInit(): void {
        /* this._categoryService.getCategoryTree().subscribe((data) => {
            console.log(data);
            this.categories = data.data.category;
        }); */
    }
}
