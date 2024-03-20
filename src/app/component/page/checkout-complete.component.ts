import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { CartItemComponent } from '../cart-item.component';
import { UserOrderService } from 'src/app/service/user-order.service';

@Component({
    selector: 'checkout-complete-component',
    standalone: true,
    imports: [CommonModule, MaterialModule, CartItemComponent],
    styles: [],
    template: `
        <style>
            * {
                color: #000;
            }
            mat-card-content {
            }
            table {
                width: 100%;
            }
            td {
                border-bottom: 1px solid rgba(125, 125, 125, 0.5);
            }

            .Form {
                min-width: 300px;
                margin: 20px auto;
            }
            mat-form-field {
                width: 100%;
            }
            mat-card-title {
                text-align: center;
                margin: 10px auto 20px;
            }
            mat-card-actions {
                justify-content: center;
            }

            .loading-shade {
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                background: rgba(0, 0, 0, 0.2);
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .successtitle {
                background-color: aqua;
                color: #393501;
            }
        </style>

        <mat-card class="mb-2">
            <mat-card-content class="successtitle text-center">
                Order Successful</mat-card-content
            >
        </mat-card>

        <div class="mb-2">
            <mat-card>
                <mat-card-content>
                    <table>
                        <thead>
                            <tr>
                                <th class="text-left">Item</th>
                                <th class="text-left">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                *ngFor="
                                    let item of userOrder?.order_item;
                                    let i = index
                                "
                            >
                                <td class="text-left">
                                    <div>{{ item.name | titlecase }}</div>
                                    <div>
                                        {{ item.unit_price }} X
                                        {{ item.total_qty }}
                                    </div>
                                </td>
                                <td class="text-left">
                                    {{
                                        item.unit_price * item.total_qty
                                            | currency
                                    }}
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left text-green-500">
                                    <div>Total</div>
                                </td>
                                <td class="text-left text-green-500">
                                    {{ userOrder?.total_price | currency }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </mat-card-content>
            </mat-card>
        </div>

        <mat-card class="mb-2">
            <mat-card-content class=" text-center">User Info</mat-card-content>
        </mat-card>

        <section>
            <mat-card>
                <mat-card-content>
                    <table>
                        <tbody>
                            <tr>
                                <td class="text-left">
                                    <div class="py-2">Name</div>
                                </td>
                                <td class="text-right py-2">
                                    {{ userOrder?.user_name }}
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left">
                                    <div class="py-2">Phone</div>
                                </td>
                                <td class="text-right py-2">
                                    {{ userOrder?.phone }}
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left">
                                    <div class="py-2">Email</div>
                                </td>
                                <td class="text-right py-2">
                                    {{ userOrder?.email }}
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left">
                                    <div class="py-2">Address</div>
                                </td>
                                <td class="text-right py-2">
                                    {{ userOrder?.shipping_address }}
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left">
                                    <div class="py-2">User Code</div>
                                </td>
                                <td class="text-right py-2">
                                    {{ userOrder?.user_code }}
                                </td>
                            </tr>

                            <tr>
                                <td class="text-left">
                                    <div class="py-2">Status</div>
                                </td>
                                <td class="text-right py-2">
                                    {{ userOrder?.status }}
                                </td>
                            </tr>

                            <tr>
                                <td class="text-left">
                                    <div class="py-2">Created Date</div>
                                </td>
                                <td class="text-right py-2">
                                    {{ userOrder?.created_date }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </mat-card-content>
            </mat-card>
        </section>
    `,
})
export class CheckoutCompleteComponent implements OnInit {
    isSubmitBtnEnable = true;
    isLoading = false;

    userOrder: any | undefined;

    id: number | undefined;

    constructor(
        private _userOrderService: UserOrderService,
        private _activatedRoute: ActivatedRoute
    ) {
        //
    }

    ngOnInit(): void {
        this._activatedRoute.params.subscribe((val) => {
            this.id = val['num'];
            console.log(this.id);
            this._userOrderService.getUserOrder(this.id).subscribe(
                (res) => {
                    if (res.type == 'success') {
                        this.userOrder = res.data;
                        console.log(res.data);
                    }
                },
                (err) => {
                    console.log(err);
                }
            );
        });
    }

    onClose() {}
}
