import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadComponent: () =>
            import('./component/page/login.component').then(
                (mod) => mod.LoginComponent
            ),
        title: 'login',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadComponent: () =>
            import('./component/page/home.component').then(
                (mod) => mod.HomeComponent
            ),
        title: 'Home',
        pathMatch: 'full',
    },
    {
        path: 'privacy-policy',
        loadComponent: () =>
            import('./component/page/privacy-policy.component').then(
                (mod) => mod.PrivacyPolicyComponent
            ),
        title: 'PrivacyPolicy',
        pathMatch: 'full',
    },
    {
        path: 'product/:id',
        loadComponent: () =>
            import('./component/page/product-detail.component').then(
                (mod) => mod.ProductDetailComponent
            ),
        title: 'Detail',
        pathMatch: 'full',
    },
    {
        path: 'cat/:id',
        loadComponent: () =>
            import('./component/page/category-product.component').then(
                (mod) => mod.CategoryProductComponent
            ),
        title: 'Category',
        pathMatch: 'full',
    },
    {
        path: 'cart',
        loadComponent: () =>
            import('./component/page/cart.component').then(
                (mod) => mod.CartComponent
            ),
        title: 'cart',
        pathMatch: 'full',
    },
    {
        path: 'checkout',
        loadComponent: () =>
            import('./component/page/checkout.component').then(
                (mod) => mod.CheckoutComponent
            ),
        title: 'checkout',
        pathMatch: 'full',
    },
    {
        path: 'search/:str',
        loadComponent: () =>
            import('./component/page/search.component').then(
                (mod) => mod.SearchComponent
            ),
        title: 'search',
        pathMatch: 'full',
    },
    {
        path: 'checkout-complete/:num',
        loadComponent: () =>
            import('./component/page/checkout-complete.component').then(
                (mod) => mod.CheckoutCompleteComponent
            ),
        title: 'Complete',
        pathMatch: 'full',
    },
    {
        path: 'user-order',
        loadComponent: () =>
            import('./component/page/order-list.component').then(
                (mod) => mod.OrderListComponent
            ),
        title: 'Order',
        pathMatch: 'full',
    },
    {
        path: 'user-order/:id',
        loadComponent: () =>
            import('./component/page/order-detail.component').then(
                (mod) => mod.OrderDetailComponent
            ),
        title: 'Order',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
