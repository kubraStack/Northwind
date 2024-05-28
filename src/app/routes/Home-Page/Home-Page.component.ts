import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
// import { BasicLayoutComponent } from '../../shared/components/basic-layout/basic-layout.component';
import { CategoryListGroupComponent } from '../../features/categories/components/category-list-group/category-list-group.component';
import { ProductCardListComponent } from '../../features/products/components/product-card-list/product-card-list.component';
import { ProductListItem } from '../../features/products/models/product-list-item';
import { SharedModule } from '../../shared/shared.module';
import { IfNotDirective } from '../../shared/directives/if-not.directive';

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [
        // CommonModule,
        RouterModule,
        SharedModule,
        // BasicLayoutComponent,
        CategoryListGroupComponent,
        ProductCardListComponent,
        IfNotDirective
    ],
    templateUrl: './Home-Page.component.html',
    styleUrl: './Home-Page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {

    selectedCategoryId: number | null = null;
    oldUser: boolean = false;
  
    constructor(private router: Router, private route: ActivatedRoute, private change: ChangeDetectorRef){}

    ngOnInit(): void {
        this.getProductFiltersFromRoute();
        this.detectOldUser();
    }

    detectOldUser() {
        if(!localStorage) return;

        
        const isOldUser = Boolean(localStorage.getItem('isOldUser'));
        if (!isOldUser) {
            localStorage.setItem('isOldUser', 'true');
            return;
        }

       setTimeout(() => {
            this.oldUser = isOldUser;
            this.change.markForCheck();
       }, 5000);
    }

    getProductFiltersFromRoute() {
        this.route.queryParams.subscribe((queryParams) => {
            const categoryId = queryParams['categoryId'];
            if (categoryId) this.selectedCategoryId = categoryId;
        }).unsubscribe();
    }


    onChangeCategorySelect(event: number|null) {
       this.selectedCategoryId = event;
       this.router.navigate([], {
        queryParams: {categoryId: this.selectedCategoryId},
        relativeTo: this.route,
       });
    }

    onViewProduct(product: ProductListItem) {
        this.router.navigate(['products', 'detail', product.id]); // localhost:4200/products/detail/1  
    }

}
