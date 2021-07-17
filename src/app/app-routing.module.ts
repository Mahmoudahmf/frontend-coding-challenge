import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarredReposComponent } from './pages/starred-repos/starred-repos.component';

const routes: Routes = [
  { path: 'starred-repos', component: StarredReposComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
