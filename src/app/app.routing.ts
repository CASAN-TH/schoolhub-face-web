import { HomeComponent } from './pages/home/home.component';
import { Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
];