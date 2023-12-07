import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
{ path: 'profile', component: ProfileComponent },
{path: 'app', component: AppComponent}];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}