import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LigaComponent } from './liga/liga.component';
import  { LigaService } from './service/liga.service';

@NgModule({
  declarations: [
    AppComponent,
    LigaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,   
  ],
  providers: [LigaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
