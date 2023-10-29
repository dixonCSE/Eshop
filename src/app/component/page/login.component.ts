import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { AuthService } from 'src/app/service/auth.service';
import { MaterialModule } from 'src/app/material.module';
import { AlertDialogComponent } from '../shared/alert-dialog.component';
import { UserStateService } from 'src/app/state/user.state.service';

@Component({
    selector: 'login-component',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, MaterialModule, RouterLink],
    styles: [],
    template: `
        <style>
            * {
                color: #000;
            }
            .loginForm {
                min-width: 18rem;
                max-width: 22rem;
                margin: 20px auto;
            }

            .signupForm {
                min-width: 18rem;
                max-width: 22rem;
                margin: 20px auto;
            }

            mat-form-field {
                width: 100%;
            }

            mat-card {
                padding: 0;
            }
            mat-card-title {
                text-align: center;
                margin: 10px auto 20px;
                font-size: 25px;
                font-weight: 500;
            }

            .login-image-div {
                display: flex;
                justify-content: center;
            }

            .login-image {
                border-radius: 50%;
                margin-bottom: 10px;
                width: 80px;
                height: 80px;
            }

            .forgot_password {
                text-decoration: none;
                margin-left: 7px;
            }

            a {
                text-decoration: none;
            }

            mat-card-actions.link-area {
                display: flex;
                justify-content: space-between;
            }
        </style>
        <form
            *ngIf="isLoginForm"
            class="loginForm"
            [formGroup]="loginForm"
            (ngSubmit)="onLogin()"
        >
            <mat-card>
                <div class="loading-shade" *ngIf="isLoading">
                    <mat-spinner *ngIf="isLoading"></mat-spinner>
                </div>
                <!-- <div class="login-image-div">
                    <img
                        class="login-image"
                        src="https://via.placeholder.com/300.png/09f/fff"
                        alt="P"
                    />
                </div> -->

                <div class="flex justify-between">
                    <div
                        class="w-1/2 text-left px-2 py-2 bg-orange-400 cursor-pointer"
                    >
                        Login
                    </div>
                    <div
                        class="w-1/2  text-right px-2 py-2 bg-lime-400 cursor-pointer"
                        (click)="viewSignup()"
                    >
                        Signup
                    </div>
                </div>

                <mat-card-title>Login</mat-card-title>
                <mat-card-content>
                    <p>
                        <mat-form-field appearance="outline" hideRequiredMarker>
                            <mat-label> User ID </mat-label>
                            <input
                                matInput
                                id="loginId"
                                #loginId
                                formControlName="login_id"
                                placeholder="User ID"
                            />
                            <mat-icon
                                color="white"
                                matSuffix
                                aria-hidden="false"
                                aria-label="icon"
                                fontIcon="account_circle"
                            ></mat-icon>
                        </mat-form-field>
                    </p>

                    <p>
                        <mat-form-field appearance="outline" hideRequiredMarker>
                            <mat-label> Password </mat-label>
                            <input
                                matInput
                                #password
                                id="password"
                                [type]="isPasswordHide ? 'password' : 'text'"
                                formControlName="password"
                                placeholder="Password"
                            />
                            <button
                                type="button"
                                mat-icon-button
                                matSuffix
                                (click)="isPasswordHide = !isPasswordHide"
                                [attr.aria-label]="'Hide password'"
                                [attr.aria-pressed]="isPasswordHide"
                            >
                                <mat-icon>{{
                                    isPasswordHide
                                        ? 'visibility_off'
                                        : 'visibility'
                                }}</mat-icon>
                            </button>
                        </mat-form-field>
                    </p>
                </mat-card-content>
                <mat-card-actions>
                    <button
                        type="submit"
                        mat-raised-button
                        color="primary"
                        [disabled]="!loginForm.valid || !isSubmitBtnEnable"
                    >
                        Login
                    </button>
                </mat-card-actions>

                <!-- <mat-card-actions class="link-area">
                    <a
                        class="forgot_password"
                        routerLink="/auth/forgot-password"
                    >
                        if forgot password?...
                    </a>

                    <a class="signup" routerLink="/auth/signup">Sign Up...</a>
                </mat-card-actions> -->
            </mat-card>
        </form>

        <form
            *ngIf="!isLoginForm"
            class="signupForm"
            [formGroup]="loginForm"
            (ngSubmit)="onSignUp()"
        >
            <mat-card>
                <div class="loading-shade" *ngIf="isLoading">
                    <mat-spinner *ngIf="isLoading"></mat-spinner>
                </div>

                <div class="flex justify-between">
                    <div
                        (click)="viewLogin()"
                        class="w-1/2 text-left px-2 py-2 bg-lime-400 cursor-pointer"
                    >
                        Login
                    </div>
                    <div
                        class="w-1/2  text-right px-2 py-2 bg-orange-400 cursor-pointer"
                    >
                        Signup
                    </div>
                </div>

                <mat-card-title>Signup</mat-card-title>
                <mat-card-content>
                    <p>
                        <mat-form-field appearance="outline" hideRequiredMarker>
                            <mat-label> Phone </mat-label>
                            <input
                                matInput
                                id="loginId"
                                #loginId
                                formControlName="login_id"
                                placeholder="Phone"
                            />
                            <mat-icon
                                color="white"
                                matSuffix
                                aria-hidden="false"
                                aria-label="icon"
                                fontIcon="account_circle"
                            ></mat-icon>
                        </mat-form-field>
                    </p>

                    <p>
                        <mat-form-field appearance="outline" hideRequiredMarker>
                            <mat-label> Password </mat-label>
                            <input
                                matInput
                                #password
                                id="password"
                                [type]="isPasswordHide ? 'password' : 'text'"
                                formControlName="password"
                                placeholder="Password"
                            />
                            <button
                                type="button"
                                mat-icon-button
                                matSuffix
                                (click)="isPasswordHide = !isPasswordHide"
                                [attr.aria-label]="'Hide password'"
                                [attr.aria-pressed]="isPasswordHide"
                            >
                                <mat-icon>{{
                                    isPasswordHide
                                        ? 'visibility_off'
                                        : 'visibility'
                                }}</mat-icon>
                            </button>
                        </mat-form-field>
                    </p>
                </mat-card-content>
                <mat-card-actions>
                    <button
                        type="submit"
                        mat-raised-button
                        color="primary"
                        [disabled]="!loginForm.valid || !isSubmitBtnEnable"
                    >
                        SignUp
                    </button>
                </mat-card-actions>
            </mat-card>
        </form>
    `,
})
export class LoginComponent implements OnInit, OnDestroy {
    loginForm = this.fb.group({
        login_id: ['', [Validators.required]],
        password: ['', [Validators.required]],
    });

    isLoginForm = true;
    isLoading = false;
    isSubmitBtnEnable = true;
    isPasswordHide = true;

    constructor(
        private fb: FormBuilder,
        private _authService: AuthService,
        private _router: Router,
        public dialog: MatDialog,
        public _userStateService: UserStateService
    ) {}

    ngOnInit(): void {
        /* if (this._authService.isLogin()) {
            let role = localStorage.getItem('role');
            this._router.navigate([role]);
        } */
    }
    ngOnDestroy(): void {}

    onLogin() {
        if (!this.loginForm.valid) return;
        this.isLoading = true;
        this.isSubmitBtnEnable = false;

        this._authService.userLogin(this.loginForm.value).subscribe(
            (res) => {
                console.log(res);

                if (res.type == 'success') {
                    localStorage.setItem('jwt', res.data.jwt);
                    localStorage.setItem('role', res.data.role);
                    // localStorage.setItem('xjwt-refresh', res.body.refreshToken);

                    //let redirect = res.data.redirect;
                    this._userStateService.isLoginTrue();
                    this._router.navigate(['/']);
                } else {
                    this.isLoading = false;
                    this.isSubmitBtnEnable = true;
                    this.dialog.open(AlertDialogComponent, {
                        disableClose: false,
                        minWidth: 300,
                        data: {
                            title: 'Error',
                            type: 'error',
                            msg: 'Login Faild',
                            titleColor: 'red',
                        },
                    });
                }
            },
            (err) => {
                this.isLoading = false;
                this.isSubmitBtnEnable = true;
                console.log(err);
            }
        );
    }

    onSignUp() {
        console.log(this.loginForm.value);

        if (!this.loginForm.valid) return;
        this.isLoading = true;
        this.isSubmitBtnEnable = false;

        this._authService.userSignUp(this.loginForm.value).subscribe(
            (res) => {
                if (res.type == 'success') {
                    this.isLoginForm = true;
                    this.isLoading = false;
                    this.isSubmitBtnEnable = true;

                    this.isLoading = false;
                    this.isSubmitBtnEnable = true;
                    this.dialog.open(AlertDialogComponent, {
                        disableClose: false,
                        minWidth: 300,
                        data: {
                            title: 'success',
                            type: 'success',
                            msg: 'Signup Success',
                            titleColor: 'green',
                        },
                    });
                } else {
                    this.isLoading = false;
                    this.isSubmitBtnEnable = true;
                    this.dialog.open(AlertDialogComponent, {
                        disableClose: false,
                        minWidth: 300,
                        data: {
                            title: 'Error',
                            type: 'error',
                            msg: 'Signup Faild',
                            titleColor: 'red',
                        },
                    });
                }
            },
            (err) => {
                this.isLoading = false;
                this.isSubmitBtnEnable = true;
                console.log(err);
            }
        );
    }

    viewLogin() {
        this.isLoginForm = true;
    }
    viewSignup() {
        this.isLoginForm = false;
    }
}
