import { Injectable, computed, signal } from '@angular/core';
import { ProductService } from '../service/product.service';
import { IProduct } from '../interface/product.interface';
import { ICartItem } from '../interface/cart.interface';

@Injectable({
    providedIn: 'root',
})
export class CartStateService {
    public cartItems = signal<ICartItem[]>([]);

    public totalPrice = computed(() =>
        this.cartItems().reduce((prev: number, curr: ICartItem) => {
            return prev + Number(curr.price) * Number(curr.qty);
        }, 0)
    );

    public totalItems = computed(() =>
        this.cartItems().reduce((prev: number, curr: ICartItem) => {
            return prev + Number(curr.qty);
        }, 0)
    );

    constructor(private _productService: ProductService) {
        let key: string = 'cart';
        let data: any = localStorage.getItem('cart');

        console.log('load', data);

        if (data == null || data == undefined) {
        } else {
            let datax: any = JSON.parse(data);

            datax.forEach((item: any) => {
                this.cartItems.mutate((val) => {
                    val.push({
                        id: String(item.id),
                        productId: item.id,
                        name: item.name,
                        price: item.price,
                        image: item.image,
                        qty: item.qty,
                    });
                });
            });
        }
    }

    xaddCart(id: number, qty: number = 1) {
        this._productService.getProduct(id).subscribe((data) => {
            let index = this.cartItems().findIndex((element) => {
                return element.id == data.id;
            });

            if (index == -1) {
                this.cartItems.mutate((val) => {
                    val.push({
                        id: data.id,
                        productId: data.id,
                        name: data.name,
                        price: data.price,
                        image: data.image,
                        qty: qty,
                    });
                });
            } else {
                this.cartItems.mutate((val) => {
                    val[index].qty += qty;
                });
            }
        });
    }

    addCart(data: IProduct, qty: number = 1) {
        let index = this.cartItems().findIndex((element) => {
            return element.productId == data.id;
        });

        console.log(data);

        if (index == -1) {
            this.cartItems.mutate((val) => {
                val.push({
                    id: String(data.id),
                    productId: data.id,
                    name: data.name,
                    price: data.price,
                    image: data.image_thumb,
                    qty: qty,
                });
            });
        } else {
            this.cartItems.mutate((val) => {
                val[index].qty += qty;
            });
        }

        localStorage.setItem('cart', JSON.stringify(this.cartItems()));
    }

    removeCart(index: number) {
        this.cartItems.mutate((val) => {
            val.splice(index, 1);
        });

        localStorage.setItem('cart', JSON.stringify(this.cartItems()));
    }

    updateCart(index: number, qty: number) {
        this.cartItems.mutate((val) => {
            val[index].qty = qty;
        });

        localStorage.setItem('cart', JSON.stringify(this.cartItems()));
    }

    clearCart() {
        /* this.cartItems.mutate((val) => {
            val = [];
        }); */
        this.cartItems.set([]);

        localStorage.setItem('cart', JSON.stringify(this.cartItems()));
    }
}
