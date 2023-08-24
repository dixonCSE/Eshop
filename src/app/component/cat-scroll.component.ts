import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'cat-scroll-component',
    standalone: true,
    imports: [CommonModule, RouterLink],
    styles: [],
    template: `
        <style>
            .list {
                display: flex;
                margin: 0.5rem 0.25rem;
                overflow: auto;
            }

            .list-element {
                margin: 0.25rem 0.33rem;
                min-width: fit-content;
                border: 2px solid #7348d7;
                border-radius: 0.25rem;
                padding: 0.5rem 1rem;
            }
        </style>

        <div class="list">
            <div class="list-element" *ngFor="let item of catItem">
                <a
                    class="no-underline text-orange-300"
                    href="/cat/{{ item.id }}"
                    [routerLink]="['/cat', item.id]"
                >
                    {{ item.name }}
                </a>
            </div>
        </div>
    `,
})
export class CatScrollComponent implements OnInit {
    @Input()
    catItem!: any;

    constructor() {}

    ngOnInit(): void {}
}
