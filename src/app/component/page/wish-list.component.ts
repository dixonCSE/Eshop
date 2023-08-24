import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'wish-list-component',
    standalone: true,
    imports: [CommonModule],
    styles: ['p { font-weight: bold; }'],
    template: ` <p>WishListComponent</p> `,
})
export class WishListComponent {}
