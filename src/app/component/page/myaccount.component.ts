import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'myaccount-component',
    standalone: true,
    imports: [CommonModule],
    styles: ['p { font-weight: bold; }'],
    template: ` <p>MyaccountComponent</p> `,
})
export class MyaccountComponent {}
