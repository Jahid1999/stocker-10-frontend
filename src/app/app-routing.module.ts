import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
 
  {
    path: '',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'company-profile',
    loadChildren: () => import('./features/company-profile/company-profile.module').then(m => m.CompanyProfileModule )
  },
  {
    path:'graph',
    loadChildren:()=>import('./features/graph/graph.module').then(m=>m.GraphModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }