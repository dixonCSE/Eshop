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
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
