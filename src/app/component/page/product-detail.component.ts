import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { IProduct } from 'src/app/interface/product.interface';
import { MaterialModule } from 'src/app/material.module';
import { CartStateService } from 'src/app/state/cart.state.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GlobalConstants as gData } from 'src/app/data/global-constants';
import { BreakpointService } from 'src/app/service/breakpoint.service';

@Component({
    selector: 'product-detail-component',
    standalone: true,
    imports: [CommonModule, MaterialModule],
    styles: [],
    template: `
        <style>
            .p-img {
                width: 100%;
            }

            table {
                width: 100%;
            }

            td {
                border-bottom: 1px solid rgba(125, 125, 125, 0.5);
            }
        </style>

        <!-- <section id="breadcrumb">
            <div id="breadcrumb-list" class="text-center text-amber-500 my-5  ">
                product ID: {{ productId }}
            </div>
        </section> -->

        <section id="product-info">
            <div id="product-image" class="flex justify-center py-2">
                <img
                    class="p-img"
                    [src]="xgData.assetsBaseURL + product?.product.image"
                    alt="img"
                    [style]="imageStyle"
                />
            </div>
            <div id="product-info" class="text-center">
                <div>{{ product?.product.name }}</div>
                <div class="text-center text-amber-500 font-bold my-2  ">
                    {{ product?.product.price | currency }}
                </div>
            </div>

            <mat-card>
                <mat-card-content>
                    <div class="flex justify-between">
                        <button
                            mat-flat-button
                            color="primary"
                            (click)="addCart()"
                        >
                            <mat-icon>add</mat-icon>
                            <mat-icon>shopping_cart</mat-icon>
                        </button>
                        <div>
                            <div class="inline-flex rounded-md shadow-sm">
                                <button
                                    (click)="qtyDecrement()"
                                    class="
                                        px-4
                                        py-2
                                        text-sm
                                        font-medium
                                        text-white
                                        bg-green-600
                                        border
                                        border-gray-700
                                        rounded-l-md
                                        hover:bg-green-950
                                    "
                                >
                                    -
                                </button>
                                <div
                                    class="
                                        px-4
                                        py-2
                                        text-sm
                                        font-medium
                                        border-t
                                        border-b
                                        bg-gray-700
                                        border-gray-600
                                        text-white
                                    "
                                >
                                    {{ qty }}
                                </div>
                                <button
                                    (click)="qtyIncrement()"
                                    class="
                                        px-4
                                        py-2
                                        text-sm
                                        font-medium
                                        text-white
                                        bg-green-600
                                        border
                                        border-gray-700
                                        rounded-r-md
                                        hover:bg-green-950
                                    "
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <button mat-mini-fab color="warn" class="w-9 h-9">
                            <mat-icon class="text-base">share</mat-icon>
                        </button>
                    </div>
                </mat-card-content>
            </mat-card>
        </section>

        <section id="product-detail">
            <div
                id="product-detail"
                class="text-center text-green-300 font-normal my-5  "
            >
                <mat-card>
                    <mat-card-content>
                        <mat-tab-group mat-align-tabs="start">
                            <mat-tab label="spec">
                                <table>
                                    <thead>
                                        <tr>
                                            <th
                                                scope="col"
                                                class="px-6 py-3 text-left text-xs font-medium text-lime-300 uppercase"
                                            >
                                                #
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-6 py-3 text-left text-xs font-medium text-lime-300 uppercase"
                                            >
                                                Value
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-orange-400">
                                        <tr *ngFor="let item of product?.spec">
                                            <td
                                                class=" px-6 py-3 whitespace-nowrap  text-left text-sm font-medium text-lime-300"
                                            >
                                                {{
                                                    item.spec_att.name
                                                        | titlecase
                                                }}
                                            </td>
                                            <td
                                                class=" px-6 py-4=3 whitespace-nowrap  text-left text-sm font-medium text-lime-300"
                                            >
                                                {{ item.value }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </mat-tab>

                            <mat-tab label="detail">
                                {{ product?.product.description }}
                            </mat-tab>

                            <mat-tab label="review"> </mat-tab>
                        </mat-tab-group>
                    </mat-card-content>
                </mat-card>
            </div>
        </section>
    `,
})
export class ProductDetailComponent {
    productId: any = 0;
    product?: any;
    qty: number = 1;
    xgData = gData;
    displaySize: number = 4;
    imageStyle: string = 'width: 100%';

    constructor(
        private _breakpointService: BreakpointService,
        private _activatedRoute: ActivatedRoute,
        private _productService: ProductService,
        private _CartStateService: CartStateService,
        private _snackBar: MatSnackBar
    ) {
        _activatedRoute.params.subscribe((val) => {
            this.productId = val['id'];
            this._productService.getProduct(val['id']).subscribe((res) => {
                this.product = res;
            });
        });
    }

    ngOnInit(): void {
        this.displaySize = this._breakpointService.getBreakpoint();
        if (this.displaySize >= 2) {
            this.imageStyle = 'width: 520px;';
        }
    }

    addCart() {
        this.product.product.image_thumb =
            gData.assetsBaseURL + this.product.product.image_thumb;
        this._CartStateService.addCart(this.product.product, this.qty);

        // console.log(this._CartStateService.cartItems());

        this._snackBar.open('successfully added ', '', {
            duration: 1.5 * 1000,
            horizontalPosition: 'start',
            verticalPosition: 'bottom',
        });
    }

    qtyIncrement() {
        this.qty = this.qty + 1;
    }

    qtyDecrement() {
        if (this.qty <= 1) {
        } else {
            this.qty = this.qty - 1;
        }
    }
}
