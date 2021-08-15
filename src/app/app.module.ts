// module imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// component imports
import { AppComponent } from './app.component';

// primeng imports
import { ButtonModule } from 'primeng/button';
import { PkmnCardComponent } from './components/pkmn-card/pkmn-card.component';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { PokedexComponent } from './components/pokedex/pokedex.component';
//import {MenuItem} from 'primeng/api';

@NgModule({
  declarations: [AppComponent, PkmnCardComponent, PokedexComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    CardModule,
    CommonModule,
    MenubarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
