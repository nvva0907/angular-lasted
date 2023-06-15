import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // {
  //   path: 'home',
  //   component: LandingPageComponent,
  //   children: [
  //     { path: 'product-management', component: ProductPageComponent },
  //     { path: 'user-management', component: UserManagementComponent },
  //     { path: 'permission-management', component: PermissionPageComponent },
  //     { path: 'task-management', component: TaskPageComponent },
  //     { path: 'system-management', component: SystemPageComponent },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
