import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'product-list-component',
    standalone: true,
    imports: [CommonModule],
    styles: ['p { font-weight: bold; }'],
    template: ` <p>ProductListComponent</p> `,
})
export class ProductListComponent {}
