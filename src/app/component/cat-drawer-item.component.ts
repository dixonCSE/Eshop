import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';

@Component({
    selector: 'cat-drawer-item',
    /* styles: [
        'div { font-size: 15px; font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif; }',
        '.side-nav-item { color: #fff; padding: 7px 10px; display: flex; cursor: pointer; :hover { background-color: #0008; } }',
        'a.side-nav-item { text-decoration: none; }',
        '.side-nav-item.has-child { display: flex; justify-content: space-between; }',
        '.side-nav-item.level-1 { padding-left: 15px; }',
        '.side-nav-item.level-2 { padding-left: 35px; }',
        '.side-nav-item.level-3 { padding-left: 50px; }',
        '.side-nav-item.level-4 { padding-left: 60px; }',
        '.children { .expanded { visibility: visible; opacity: 1; padding-left: 0; max-height: 4000px; transition: visibility 500ms, opacity 500ms, max-height 500ms; transition-timing-function: ease-in-out; }.collapsed { overflow: hidden; visibility: hidden; padding-left: 0; opacity: 0; max-height: 1px; transition: visibility 275ms, opacity 275ms, max-height 280ms; transition-timing-function: ease-out; }.no-animations .expanded, .no-animations .collapsed { transition: none ; } }',
        '.level-1, .level-2, .level-3, .level-4 { .mat-icon { height: 20px; } .collapsed > .mat-icon { transform: rotate(0deg); transition: transform 150ms; transition-timing-function: ease-in-out; }.expanded > .mat-icon { transform: rotate(90deg); transition: transform 150ms; transition-timing-function: ease-in-out; } } ',
    ], */
    styleUrls: ['./cat-drawer-item.component.scss'],
    template: `
        <div *ngIf="category.sub; then thenBlock; else elseBlock"></div>

        <ng-template #thenBlock>
            <div>
                <div
                    class="side-nav-item has-child level-{{ level }}"
                    title="{{ category.name }}"
                    [ngClass]="
                        is_sideCatItemClassExpanded ? 'expanded' : 'collapsed'
                    "
                    (click)="catItemExpand()"
                >
                    <span>{{ category.name | titlecase }}</span>
                    <mat-icon
                        role="img"
                        svgicon="keyboard_arrow_right"
                        class="mat-icon notranslate rotating-icon mat-icon-no-color"
                        aria-hidden="true"
                        data-mat-icon-type="svg"
                        data-mat-icon-name="keyboard_arrow_right"
                    >
                        <svg
                            focusable="false"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
                            ></path>
                        </svg>
                    </mat-icon>
                </div>

                <div
                    class="children"
                    [ngClass]="
                        is_sideCatItemClassExpanded ? 'expanded' : 'collapsed'
                    "
                >
                    <ng-container *ngFor="let ItemLv0 of category.sub">
                        <cat-drawer-item
                            [category]="ItemLv0"
                            [level]="level + 1"
                        ></cat-drawer-item>
                    </ng-container>
                </div>
            </div>
        </ng-template>

        <ng-template #elseBlock>
            <div>
                <a
                    class="side-nav-item level-{{ level }}"
                    title="{{ category.name }}"
                    [ngClass]="is_sideCatItemClassActive ? 'active' : ''"
                    [routerLink]="[category.routerLink]"
                    routerLinkActive="active"
                >
                    <span>{{ category.name | titlecase }}</span>
                </a>
            </div>
        </ng-template>
    `,
})
export class CatDrawerItemComponent implements OnChanges {
    @Input() category: any;
    @Input() level: number = 0;

    is_sideCatItemClassExpanded: boolean = false;
    is_sideCatItemClassActive: boolean = false;
    tmp_is_sideCatItemClassActive: boolean = false;

    classes: string = 'level-' + this.level;

    constructor() {
        //
    }

    ngOnInit(): void {
        this.category.routerLink = 'cat/' + this.category.id;
    }

    ngOnChanges() {
        this.is_sideCatItemClassActive = false;
    }

    catItemExpand() {
        this.is_sideCatItemClassExpanded = !this.is_sideCatItemClassExpanded;
    }

    catItemactive() {
        this.tmp_is_sideCatItemClassActive = !this.is_sideCatItemClassActive;
        this.is_sideCatItemClassActive = this.tmp_is_sideCatItemClassActive;
    }
}
