import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GainerLooserComponent } from './homepage/gainer-looser/gainer-looser.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage/graph-gainer-looser', pathMatch: 'full'},
  {
    path: 'homepage/graph-gainer-looser', component: GainerLooserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }