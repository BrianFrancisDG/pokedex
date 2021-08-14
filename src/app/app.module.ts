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

@NgModule({
  declarations: [AppComponent, PkmnCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    CardModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
