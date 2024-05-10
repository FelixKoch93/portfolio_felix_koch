import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LandingpageComponent } from './main-content/landingpage/landingpage.component'; // Importiere die LandingpageComponent



export const routes: Routes = [
    { path: '', component: MainContentComponent},
    { path: 'imprint', component: ImprintComponent},
];
