import {
    Component,
    OnInit,
    OnDestroy,
    ViewChild,
    ElementRef,
} from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';

import {
    BreakpointObserver,
    Breakpoints,
    BreakpointState,
} from '@angular/cdk/layout';
import { Subject, Observable } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';

import { CategoryService } from './service/category.service';
import { AuthService } from './service/auth.service';
import { UserStateService } from './state/user.state.service';
import { CartStateService } from './state/cart.state.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    categories: any = null;
    title = 'ecom';

    isSideNavOpen: boolean = false; // true
    sideNavMode: MatDrawerMode = 'over';

    isSideCat: boolean = false;
    isSideNav: boolean = false;

    destroyed = new Subject<void>();

    displayNameMap = new Map([
        [Breakpoints.XSmall, false],
        [Breakpoints.Small, false],
        [Breakpoints.Medium, true],
        [Breakpoints.Large, true],
        [Breakpoints.XLarge, true],
    ]);

    displayNameMapMode = new Map([
        [Breakpoints.XSmall, 'over'],
        [Breakpoints.Small, 'over'],
        [Breakpoints.Medium, 'side'],
        [Breakpoints.Large, 'side'],
        [Breakpoints.XLarge, 'side'],
    ]);

    constructor(
        breakpointObserver: BreakpointObserver,
        private _router: Router,
        private _categoryService: CategoryService,
        public _authService: AuthService,
        public _userStateService: UserStateService,
        public _cartStateService: CartStateService
    ) {
        /* breakpointObserver
            .observe([
                Breakpoints.XSmall,
                Breakpoints.Small,
                Breakpoints.Medium,
                Breakpoints.Large,
                Breakpoints.XLarge,
            ])
            .pipe(takeUntil(this.destroyed))
            .subscribe((result) => {
                for (const query of Object.keys(result.breakpoints)) {
                    if (result.breakpoints[query]) {
                        this.isSideNavOpen =
                            this.displayNameMap.get(query) ??
                            this.isSideNavOpen;
                        this.sideNavMode =
                            (this.displayNameMapMode.get(
                                query
                            ) as MatDrawerMode) ?? this.sideNavMode;
                    }
                }
            }); */
    }

    @ViewChild('drawer')
    drawer!: MatSidenav;

    @ViewChild('cartDrawer')
    cartDrawer!: MatSidenav;

    ngOnInit(): void {
        this._router.events.subscribe((_routerEvent: Event) => {
            if (_routerEvent instanceof NavigationStart) {
                if (!this.isSideNavOpen) {
                    this.drawer.close();
                }

                this.cartDrawer.close();
            }
        });

        if (this._authService.isLogin()) {
            this._userStateService.isLoginTrue();
        } else {
            this._userStateService.isLoginFalse();
        }

        this._categoryService.getCategoryTree().subscribe((data) => {
            this.categories = data.data.category;
        });
    }

    catMenuDrawerToggle() {
        this.isSideNav = false;
        if (this.drawer.opened && this.isSideCat) {
            this.drawer.close();
            this.isSideCat = false;
        } else {
            this.isSideCat = true;
            this.drawer.open();
        }
        // this.isSideCat = !this.isSideCat;
    }

    navMenuDrawerToggle() {
        this.isSideCat = false;
        if (this.drawer.opened && this.isSideNav) {
            this.drawer.close();
            this.isSideNav = false;
        } else {
            this.drawer.open();
            this.isSideNav = true;
        }
    }

    @ViewChild('search')
    search!: ElementRef;
    onSearch() {
        let x = this.search.nativeElement.value;
        this._router.navigate(['search/', x]);
    }

    onKeyUp(event: any) {
        if (event.key === 'Enter') {
            let x = this.search.nativeElement.value;
            this._router.navigate(['search/', x]);
            //
        }
    }

    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
}
