import { Component, OnInit } from '@angular/core';
import { CartStateService } from '../state/cart.state.service';

@Component({
    selector: 'cart-drawer',
    styles: [
        'mat-card-header {justify-content: center;padding: unset;}',
        'mat-card {padding: 16px;background-color: unset;}',
    ],
    template: `
        <style>
            div a {
                text-decoration: none;
                padding: 0.5rem 0.75rem;
                background: coral;
                color: blue;
            }
        </style>
        <mat-card class="card">
            <mat-card-header>
                <mat-card-title>Cart</mat-card-title>
            </mat-card-header>
        </mat-card>

        <div *ngFor="let item of _cartStateService.cartItems(); let i = index">
            <cart-drawer-item [cartItem]="item"></cart-drawer-item>
        </div>

        <div class="flex justify-between px-4 py-5">
            <div class="font-bold">Total</div>
            <div>
                <span>{{ _cartStateService.totalPrice() | currency }}</span>
            </div>
        </div>
        <div class="text-center py-2">
            <a routerLink="cart"> View Cart</a>
        </div>
    `,
})
export class CartDrawerComponent implements OnInit {
    constructor(public _cartStateService: CartStateService) {}
    ngOnInit(): void {}
}
