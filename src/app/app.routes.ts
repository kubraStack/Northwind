import { Routes } from '@angular/router';
import { HomePageComponent } from './routes/Home-Page/Home-Page.component';
import { LoginPageComponent } from './routes/auth/Login-Page/Login-Page.component';
import { authRoutes } from './routes/auth/auth.routes';
import { productsRoutes } from './routes/products/products.routes';
import { categoriesRoutes } from './routes/categories/categories.routes';
//routes tanımlamaları
export const routes: Routes = [
    {
        path: '', // route belirtilen path ile eşleştiğinde
        component: HomePageComponent, //ilgili componenti AppComponent'ten başlayarak ilk karşılaştığı <router-outlet> etiketine yerleştirir
    },
    ...authRoutes,
    ...productsRoutes,
    ...categoriesRoutes 
    
    
    //kendi klasöründe tanımlanan route'lar burada spread operatörü ile burada belirtmek zorunludur.
];
