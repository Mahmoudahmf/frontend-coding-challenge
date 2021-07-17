import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarredReposComponent } from './pages/starred-repos/starred-repos.component';
import { StarredRepoComponent } from './components/starred-repo/starred-repo.component';

@NgModule({
  declarations: [
    AppComponent,
    StarredReposComponent,
    StarredRepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
