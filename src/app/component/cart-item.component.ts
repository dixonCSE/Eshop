import { Component, Input, OnInit } from '@angular/core';
import { ICartItem } from '../interface/cart.interface';
import { CartStateService } from '../state/cart.state.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { TruncatePipe } from '../pipe/truncate.pipe';

@Component({
    selector: 'cart-item',
    standalone: true,
    styles: [],
    template: `
        <style>
            .cart-item-div {
                padding: 4px 0px;
            }
            .cart-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 4px 6px;
                background-color: #0002;
            }
            .cart-item-image {
                height: 3.5rem;
                border-radius: 0.25rem;
            }
        </style>

        <div class="cart-item-div">
            <div class="cart-item">
                <div class="">
                    <img
                        [src]="cartItem.image"
                        alt="img"
                        class="cart-item-image"
                    />
                </div>
                <div>
                    <div>{{ cartItem.name | truncate }}</div>
                    <div>{{ cartItem.price }}</div>
                </div>
                <div>
                    <div class="inline-flex rounded-md shadow-sm" role="group">
                        <button
                            (click)="qtyDecrement()"
                            type="button"
                            class="px-1 py-1 text-sm rounded-l-lg  bg-gray-700 border-gray-600 text-white hover:text-white hover:bg-gray-600"
                        >
                            -
                        </button>
                        <button
                            type="button"
                            class="px-1 py-1 text-sm-t border-b  bg-gray-700 border-gray-600 text-white"
                        >
                            {{ cartItem.qty }}
                        </button>
                        <button
                            (click)="qtyIncrement()"
                            type="button"
                            class="px-1 py-1 text-sm rounded-r-md  bg-gray-700 border-gray-600 text-white hover:text-white hover:bg-gray-600"
                        >
                            +
                        </button>

                        <button
                            (click)="itemClear()"
                            type="button"
                            class=" text-sm rounded  bg-gray-700 border-gray-600 text-white hover:text-white hover:bg-gray-600"
                        >
                            <mat-icon>delete</mat-icon>
                        </button>
                    </div>
                </div>
                <div>{{ cartItem.price * cartItem.qty | currency }}</div>
            </div>
        </div>
    `,
    imports: [CommonModule, MaterialModule, TruncatePipe],
})
export class CartItemComponent implements OnInit {
    @Input()
    cartItem!: ICartItem;

    @Input()
    index!: number;

    constructor(public _CartStateService: CartStateService) {}

    ngOnInit(): void {}

    qtyIncrement() {
        this._CartStateService.updateCart(this.index, this.cartItem.qty + 1);
    }

    qtyDecrement() {
        if (this.cartItem.qty <= 1) {
        } else {
            this._CartStateService.updateCart(
                this.index,
                this.cartItem.qty - 1
            );
        }
    }

    itemClear() {
        this._CartStateService.removeCart(this.index);
    }
}
