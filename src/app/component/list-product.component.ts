import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MaterialModule } from '../material.module';
import { IProduct } from '../interface/product.interface';
import { CartStateService } from '../state/cart.state.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import { TruncatePipe } from '../pipe/truncate.pipe';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'list-product',
    standalone: true,
    imports: [CommonModule, MaterialModule, TruncatePipe, RouterLink],
    styles: [],
    template: `
        <style>
            .product-card {
                max-width: 100%;
            }
            mat-card-title {
                text-align: center;
            }
            .min-h-245 {
                min-height: 245px;
            }

            .p-img {
                width: 100%;
            }
        </style>
        <div class="min-h-245">
            <mat-card class="product-card">
                <div class="relative">
                    <a
                        title="{{ product.name }}"
                        href="/product/{{ product.id }}"
                        [routerLink]="['/product', product.id]"
                        routerLinkActive="active"
                        ><img
                            class="p-img"
                            [src]="product.image_thumb"
                            alt="cv"
                        />
                    </a>
                    <mat-card-actions
                        class="flex justify-between w-full bottom-0 opacity-50 absolute hover:opacity-100"
                    >
                        <button
                            mat-flat-button
                            color="primary"
                            (click)="addCart()"
                        >
                            <mat-icon>add</mat-icon>
                            <mat-icon>shopping_cart</mat-icon>
                        </button>
                        <button mat-mini-fab color="warn" class="w-9 h-9">
                            <mat-icon class="text-base">share</mat-icon>
                        </button>
                    </mat-card-actions>
                </div>

                <mat-card-content>
                    <div class="text-base text-center">
                        <a
                            class="no-underline text-gray-50"
                            title="{{ product.name }}"
                            href="/product/{{ product.id }}"
                            [routerLink]="['/product', product.id]"
                            routerLinkActive="active"
                        >
                            <span>{{ product.name | truncate }}</span>
                        </a>
                    </div>
                    <div>
                        <div>
                            <span class="text-sm">{{
                                product.price | currency
                            }}</span>
                            <!-- <span class="text-sm">$</span> -->
                        </div>
                    </div>
                </mat-card-content>
            </mat-card>
        </div>
    `,
})
export class ListProductComponent implements OnInit {
    @Input()
    product!: IProduct;

    constructor(
        private _CartStateService: CartStateService,
        private _snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {}

    addCart() {
        this._CartStateService.addCart(this.product);

        // console.log(this._CartStateService.cartItems());

        this._snackBar.open('successfully added ', '', {
            duration: 1.5 * 1000,
            horizontalPosition: 'start',
            verticalPosition: 'bottom',
        });
    }
}
