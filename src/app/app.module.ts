import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { SideNavComponent } from './component/layout/side-nav/side-nav.component';
import { SideNavItemComponent } from './component/layout/side-nav-item/side-nav-item.component';
import { CartDrawerComponent } from './component/cart-drawer.component';
import { CartDrawerItemComponent } from './component/cart-drawer-item.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CatDrawerComponent } from './component/cat-drawer.component';
import { CatDrawerItemComponent } from './component/cat-drawer-item.component';
import { CartItemComponent } from './component/cart-item.component';
import { TruncatePipe } from './pipe/truncate.pipe';
import { JwtInterceptor } from './interceptor/jwt.interceptor';
import { NotificationDialogComponent } from './component/shared/notification-dialog.component';
import { AlertDialogComponent } from './component/shared/alert-dialog.component';
import { ConfirmDialogComponent } from './component/shared/confirm-dialog.component';

@NgModule({
    declarations: [
        AppComponent,
        SideNavComponent,
        SideNavItemComponent,
        NotificationDialogComponent,
        AlertDialogComponent,
        ConfirmDialogComponent,
        CartDrawerComponent,
        CartDrawerItemComponent,
        CatDrawerComponent,
        CatDrawerItemComponent,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true,
        },
        { provide: DEFAULT_CURRENCY_CODE, useValue: '৳' },
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        TruncatePipe,
    ],
})
export class AppModule {}
