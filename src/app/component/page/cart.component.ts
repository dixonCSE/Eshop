import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartStateService } from 'src/app/state/cart.state.service';
import { MaterialModule } from 'src/app/material.module';
import { CartItemComponent } from '../cart-item.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'cart-component',
    standalone: true,
    imports: [CommonModule, MaterialModule, CartItemComponent, RouterLink],
    styles: [],
    template: `
        <style></style>

        <mat-card class="mb-2">
            <mat-card-content>My Cart</mat-card-content>
        </mat-card>

        <div class="mb-2">
            <cart-item
                *ngFor="
                    let item of _cartStateService.cartItems();
                    let i = index
                "
                [cartItem]="item"
                [index]="i"
            ></cart-item>
        </div>

        <mat-card class="mb-2">
            <mat-card-content>
                <div class="flex justify-between">
                    <div class="font-bold">Total</div>
                    <div>
                        <span>{{
                            _cartStateService.totalPrice() | currency
                        }}</span>
                    </div>
                </div>
            </mat-card-content>
        </mat-card>

        <mat-card class="mb-2">
            <mat-card-content>
                <div class="flex justify-between">
                    <div>
                        <button mat-flat-button color="primary">
                            Continue...
                        </button>
                    </div>
                    <div>
                        <a
                            mat-flat-button
                            color="accent"
                            href="/checkout"
                            routerLink="/checkout"
                            routerLinkActive="active"
                        >
                            Checkout
                        </a>
                    </div>
                </div>
            </mat-card-content>
        </mat-card>
    `,
})
export class CartComponent implements OnInit {
    constructor(public _cartStateService: CartStateService) {}
    ngOnInit(): void {
        //
    }
}
