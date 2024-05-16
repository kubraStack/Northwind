import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BasicLayoutComponent } from '../../shared/components/basic-layout/basic-layout.component';
import { CategoryListGroupComponent } from '../../features/categories/components/category-list-group/category-list-group.component';
import { ProductCardListComponent } from '../../features/products/components/product-card-list/product-card-list.component';

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        BasicLayoutComponent,
        CategoryListGroupComponent,
        ProductCardListComponent
    ],
    templateUrl: './Home-Page.component.html',
    styleUrl: './Home-Page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent { }
