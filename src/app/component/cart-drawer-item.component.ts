import { Component, Input, OnInit } from '@angular/core';
import { ICartItem } from '../interface/cart.interface';
import { CartStateService } from '../state/cart.state.service';

@Component({
    selector: 'cart-drawer-item',
    styles: [],
    template: `
        <style>
            img {
                height: 50px;
                width: 50px;
                border-radius: unset;
                margin-bottom: 0;
            }

            mat-card-header {
                justify-content: space-between;
            }
            mat-card-header {
                padding: 6px 10px;
            }

            mat-card {
                border-bottom: 2px solid #0003;
                background-color: unset;
            }
            mat-card-subtitle {
            }
            .text-price {
                font-size: 0.73rem;
                font-weight: 200;
            }
        </style>
        <div>
            <mat-card>
                <mat-card-header>
                    <div>
                        <img mat-card-avatar [src]="cartItem.image" alt="img" />
                    </div>
                    <mat-card-subtitle class="font-2">
                        {{ cartItem.name | truncate }}
                    </mat-card-subtitle>
                    <mat-card-subtitle class="text-price">
                        <span>{{ cartItem.price | currency }}</span>
                        X
                        <span>{{ cartItem.qty }}</span>
                        =
                        <span>{{
                            cartItem.price * cartItem.qty | currency
                        }}</span>
                    </mat-card-subtitle>
                </mat-card-header>
            </mat-card>
        </div>
    `,
})
export class CartDrawerItemComponent implements OnInit {
    @Input()
    cartItem!: ICartItem;

    constructor(private _CartStateService: CartStateService) {}

    ngOnInit(): void {}
}
