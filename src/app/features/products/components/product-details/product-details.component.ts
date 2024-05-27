import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductDetails } from '../../models/product-details';
import { PlaceholderComponent } from '../../../../shared/components/placeholder/placeholder.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { HighlightDirective } from '../../../../shared/directives/highlight.directive';
import { VatPipe } from '../../pipes/vat.pipe';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CommonModule,
    PlaceholderComponent,
    ButtonComponent,
    VatPipe,
    HighlightDirective
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent implements OnInit {


  @Input() id!: number; //ChangeDetection'nun çalışması  OnPush ile değişikliklerin algılanması için Input değeri değişmesi gerekir. (1.OLAY)
  product!: ProductDetails;

  constructor(
    private productsService:ProductsService, 
    private change:ChangeDetectorRef
  ){}
  
  //Lifecycle metotlarında da OnPush değişiklikleri algılar ve kontrol eder.
  ngOnInit(): void {
    this.getDetails();
  }

 getDetails(){
    this.productsService.getById(this.id).subscribe((product) => {
      this.product = product;
      this.change.markForCheck(); // OnPush ile değişikliklerin algılanması için değişikliklerin kontrol edilmesi gerekir.Buradaki gibi asenktron işlemlerde değişiklikleri yakalamak için markForCheck kullanılır. (2.OLAY)
    });
  }
  //Kullanıcı herhangi bir olay oluşturduğunda OnPush ile değişikliklerin algılanması için değişikliklerin kontrol edilmesi gerekir. (3.OLAY)
  onAddToCard() {} 
  
}
