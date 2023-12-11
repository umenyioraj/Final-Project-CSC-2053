
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import the routing module
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { AppComponent } from './app.component';
import { AddBlogPostComponent } from './add-blog-post/add-blog-post.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ProfileComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CommonModule, AppComponent,UsersComponent, AddBlogPostComponent],
  
  
})
export class AppModule {}
