import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// For Network
import { HttpClientModule } from "@angular/common/http";
import { NewsService } from "./news.service"

// For Ng Material
import { MatButtonModule, MatMenuModule, MatToolbarModule, MatCardModule } from "@angular/material";
import { MatIconModule, MatSidenavModule, MatListModule } from "@angular/material";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule, 
    MatSidenavModule, 
    MatListModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
