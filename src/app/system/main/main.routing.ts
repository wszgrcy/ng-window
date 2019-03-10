import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainComponent },
];

export const MainRoutes = RouterModule.forChild(routes);
