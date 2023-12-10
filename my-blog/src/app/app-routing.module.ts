import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';


export const routes: Routes = [
{ path: 'profile', component: ProfileComponent },
{path: 'app', component: AppComponent}, {path: 'users', component: UsersComponent}];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}