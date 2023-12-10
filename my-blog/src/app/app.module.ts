// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import the routing module
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { AppComponent } from './app.component';
import { AddBlogPostComponent } from './add-blog-post/add-blog-post.component';

@NgModule({
  declarations: [AppComponent, ProfileComponent, UsersComponent, AddBlogPostComponent],
  imports: [BrowserModule, AppRoutingModule], // Include the AppRoutingModule here
  bootstrap: [AppComponent],
  
})
export class AppModule {}
