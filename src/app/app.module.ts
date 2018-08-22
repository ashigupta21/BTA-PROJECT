import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GooglePlaceModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
  path: 'dashboard',
  component:DashboardComponent

      },
      {
        path: '',
        component:LoginComponent
      
            }

    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
