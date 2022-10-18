import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Auth0Component } from './components/auth0/auth0.component';
import { HomepageComponent } from './components/homepage/homepage.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    Auth0Component,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'ilker-blog.us.auth0.com',
      clientId: 'BrPFRE688i4jJ1o4OPlwxsmPgiiMxTcp'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
