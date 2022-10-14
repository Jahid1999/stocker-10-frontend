import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'company-profile/',
    loadChildren: () =>
      import('./features/company-profile/company-profile.module').then(
        (m) => m.CompanyProfileModule
      ),
  },
  {
    path: 'page/company/',
    loadChildren: () =>
      import('./features/company-graph/company-graph.module').then(
        (m) => m.CompanyGraphModule
      ),
  },
  {
    path: 'faq',
    loadChildren: () =>
      import('./features/faq/faq.module').then((m) => m.FaqModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
