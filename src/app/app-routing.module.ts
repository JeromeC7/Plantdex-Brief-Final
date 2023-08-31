import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageMyPlantsComponent } from './pages/page-my-plants/page-my-plants.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PlantComponent } from './components/plant/plant.component';
import { PlanteUpdateComponent } from './components/plante-update/plante-update.component';
import { PlanteCreateComponent } from './components/plante-create/plante-create.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // si un user arrive sur localhost:4200 on le redirige vers localhost:4200/home
  { path: 'home', component: PageHomeComponent },
  { path: 'my-plants', component: PageMyPlantsComponent },
  { path: 'admin', component: PageAdminComponent },
  { path: 'plant/:id', component: PlantComponent },
  { path: 'plant/update/:id', component: PlanteUpdateComponent },
  { path: 'createPlant', component: PlanteCreateComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
