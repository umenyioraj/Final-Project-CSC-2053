// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import the routing module
import { ProfileComponent } from './profile/profile.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, ProfileComponent],
  imports: [BrowserModule, AppRoutingModule], // Include the AppRoutingModule here
  bootstrap: [AppComponent],
})
export class AppModule {}
