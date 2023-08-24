import { Injectable, computed, signal } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UserStateService {
    isLogin = signal(false);
    constructor() {}

    isLoginTrue() {
        this.isLogin.set(true);
    }

    isLoginFalse() {
        this.isLogin.set(false);
    }
}
