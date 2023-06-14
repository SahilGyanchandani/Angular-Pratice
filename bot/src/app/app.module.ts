import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ClientComponent } from './client/client.component';
import { BotComponent } from './bot/bot.component';
import {  FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    // ClientComponent,
    BotComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
