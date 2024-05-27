import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BasicLayoutComponent } from '../../../shared/components/basic-layout/basic-layout.component';
import { SharedModule } from '../../../shared/shared.module';

@Component({
    selector: 'app-login-page',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        // BasicLayoutComponent
        SharedModule
    ],
    templateUrl: './Login-Page.component.html',
    styleUrl: './Login-Page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent { }
