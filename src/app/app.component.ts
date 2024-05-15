import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';

//Component: Angular tarafında bir görünüm ve işlev için küçük parçalardır.
@Component({
  selector: 'app-root', // template içinde kullanılacak etiket adı
  standalone: true,  //Angular 17 sonrası için varsayılan hale geldi. Standalone componentler herhangi bir Module yapısına bağlı kalmadan var olabilirlerç
  imports: [CommonModule, NavbarComponent, FooterComponent], //İmport edilecek modülleri ve angular yapılarını belirtir.
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
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

// Angular 17 öncesinde varsayılan olarak componentler Module yapısında tanımlanıyorlardı.
// Angular Module Örneği
// @NgModule({
//   declarations: [AppComponent], // Component, Directive ve Pipe'ları tanımlar.
//   imports: [], // Dışarıdan alınan modülleri ekler.
//   providers: [], // Servisleri ekler.
//   bootstrap: [AppComponent], // Uygulamanın başlangıç componentini belirler.
// })
// export class AppModule {}