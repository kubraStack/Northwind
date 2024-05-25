import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  ProductListItem } from '../../models/product-list-item';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { ProductsService } from '../../services/products.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-product-card-list',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent
  ],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardListComponent implements OnInit {
  @Input() filterByCategoryId: number | null = null;
  @Output() viewProduct = new EventEmitter<ProductListItem>();

  productList!: ProductListItem[];

  constructor(private productsService:ProductsService){}

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.productsService
      .getList()
      .pipe(take(1)) //rxjs pipe => take ile verilen değer(count) kadar çalışır
      .subscribe((productList) => {
      this.productList = productList;
    });
  }

  get filteredProductList(): ProductListItem[]{
    let filteredProductList = this.productList;

    if (this.filterByCategoryId) {
      filteredProductList = this.productList.filter((product) => product.categoryId === this.filterByCategoryId);
    }
    return filteredProductList;
  }
  
  onViewProduct(product: ProductListItem) {
    this.viewProduct.emit(product);
  }

}
