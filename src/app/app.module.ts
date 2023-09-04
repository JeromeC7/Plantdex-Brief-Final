import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageMyPlantsComponent } from './pages/page-my-plants/page-my-plants.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PlantListComponent } from './components/plant-list/plant-list.component';
import { CardComponent } from './components/card/card.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PlantComponent } from './components/plant/plant.component';
import { PlanteUpdateComponent } from './components/plante-update/plante-update.component';
import { PlanteCreateComponent } from './components/plante-create/plante-create.component';
import { DropComponent } from './drop/drop.component';
import { SunComponent } from './sun/sun.component';
import { LikeComponent } from './like/like.component';
import { FilterBarComponent } from './filterbar/filterbar.component';
import { SortByComponent } from './sort-by/sort-by.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageHomeComponent,
    PageMyPlantsComponent,
    PageAdminComponent,
    PageNotFoundComponent,
    PlantListComponent,
    CardComponent,
    SideBarComponent,
    SearchBarComponent,
    PlantComponent,
    PlanteUpdateComponent,
    PlanteCreateComponent,
    DropComponent,
    SunComponent,
    LikeComponent,
    FilterBarComponent,
    SortByComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
