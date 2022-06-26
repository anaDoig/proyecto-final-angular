import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ManagementComponent } from './pages/management/management.component';

const routes: Routes = [
  {
    path: "management", component: ManagementComponent
  },
  {
    path: "", pathMatch: "full", component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
