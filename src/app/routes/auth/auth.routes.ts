import { Routes } from '@angular/router';
import { LoginPageComponent } from './Login-Page/Login-Page.component';
//routes tanımlamaları
export const authRoutes: Routes = [
   
    {
        path:'auth/login',
        component: LoginPageComponent
    }
];
