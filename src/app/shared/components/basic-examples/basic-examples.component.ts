import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
    selector: 'app-basic-examples',
    standalone: true,
    imports: [
        CommonModule,
        NavbarComponent,
        FooterComponent
    ],
    templateUrl: './basic-examples.component.html',
    styleUrl: './basic-examples.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicExamplesComponent { 
    title: string = 'Northwind Market';
  cartCount: number = 0; //Sepetteki ürün sayısını tutar

  products: {name: string, price: number, discontinued: boolean}[] = [
    //Ürün Listesi
   {
    name: "Çay",
    price: 100,
    discontinued: false
   },
   {
    name: "Kahve",
    price: 200,
    discontinued: true
   },
   {
    name: "Su",
    price: 100,
    discontinued: false
   },
   {
    name: "Meyve Suyu",
    price: 150,
    discontinued: false
   },
   {
    name: "Maden Suyu",
    price: 75,
    discontinued: true
   },
  ];

  onAddProductToCart():void {
    //Sepete ürün ekleme işlemi
    this.cartCount++;

    console.log("Ürün sepete eklendi !");
  }
}
