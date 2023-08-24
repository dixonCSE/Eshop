import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'category-component',
    standalone: true,
    imports: [CommonModule],
    template: ` <p>CategoryPageComponent</p> `,
    styles: ['p { font-weight: bold; }'],
})
export class CategoryComponent {}
