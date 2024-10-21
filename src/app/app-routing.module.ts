import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AdminFeachesComponent } from './admin-feaches/admin-feaches.component';
import { DashboadComponent } from './dashboad/dashboad.component';

const routes: Routes = [
  { path: '', component: MainComponent }, // Default route
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  {path:'admin' , component:AdminComponent},
  {path:'admin_features' , component:AdminFeachesComponent},
  {path:'dashboad' , component:DashboadComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
