import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApodComponent } from './components/apod/apod.component';
import { BeersComponent } from './components/beers/beers.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { Injectable } from '@angular/core';

@Injectable()
export class YourGuard implements CanActivate {
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {

        return true;
        // your  logic goes here
    }
}

const routes: Routes = [
    { path: 'calculator-component', component: CalculatorComponent },
    { path: 'apod-component', component: ApodComponent },
    { path: 'beers-component', component: BeersComponent, canActivate: [YourGuard] },
    {
        path: '',
        redirectTo: '/calculator-component',
        pathMatch: 'full'
    },
    {
        path: 'customers', loadChildren: () => {
            console.log('Entra aquí');
            return import('./customers/customers.module').then(m => m.CustomersModule);
        }
    },
    { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
    { path: '**', component: CalculatorComponent }
]; // sets up routes constant where you define your routes

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [YourGuard]
})
export class AppRoutingModule { }

