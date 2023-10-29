import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/service/auth.service';
import { UserOrderService } from 'src/app/service/user-order.service';
import { MaterialModule } from 'src/app/material.module';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'order-detail-component',
    standalone: true,
    imports: [CommonModule, MaterialModule],
    styles: [],
    template: `
        <style>
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
        </style>

        <mat-card class="mb-2">
            <mat-card-content>Order Detail</mat-card-content>
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
                            <tr *ngFor="let item of orderItem; let i = index">
                                <td class="text-left">
                                    <div>{{ item.name | titlecase }}</div>
                                    <div>{{ item.price }} X {{ item.qty }}</div>
                                </td>
                                <td class="text-left">
                                    {{ item.price * item.qty | currency }}
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left text-green-500">
                                    <div>Total</div>
                                </td>
                                <td class="text-left text-green-500">
                                    {{ order?.net_price | currency }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </mat-card-content>
            </mat-card>
        </div>
    `,
})
export class OrderDetailComponent implements OnInit, OnDestroy {
    order?: any;
    orderItem: any[] = [];
    orderID: any = 0;

    constructor(
        private _authService: AuthService,
        private _activatedRoute: ActivatedRoute,
        private _userOrderService: UserOrderService,
        public dialog: MatDialog
    ) {
        _activatedRoute.params.subscribe((val) => {
            this.orderID = val['id'];
            this._userOrderService.get(this.orderID).subscribe((res) => {
                this.order = res.data.user_order;
                this.orderItem = res.data.user_order_item;
            });
        });
    }

    ngOnInit(): void {}

    ngOnDestroy(): void {}
}
