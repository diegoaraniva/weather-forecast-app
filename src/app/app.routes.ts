import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ForecastComponent } from './pages/forecast/forecast.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'forecast', component: ForecastComponent }
];
