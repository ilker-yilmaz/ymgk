import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"


import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropComponent } from './components/drop/drop.component';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DeadlineanimationComponent } from './components/deadlineanimation/deadlineanimation.component';

import {ToastrModule} from "ngx-toastr";

import {AuthModule} from '@auth0/auth0-angular';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';

import {NgxImageCompressService} from 'ngx-image-compress';
import { DropAndDragComponent } from './components/drop-and-drag/drop-and-drag.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DropComponent,
    NavbarComponent,
    DeadlineanimationComponent,
    AuthButtonComponent,
    DropAndDragComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    AppRoutingModule,
    BrowserAnimationsModule,

    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),

    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: "ilker-blog.us.auth0.com",
      clientId: "BrPFRE688i4jJ1o4OPlwxsmPgiiMxTcp"
    }),
  ],
  providers: [NgxImageCompressService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

