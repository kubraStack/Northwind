import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule
    ],
    templateUrl: './Home-Page.component.html',
    styleUrl: './Home-Page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent { }
