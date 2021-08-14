import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { HttpService } from './services/http.service';
import { PokedexBuilderService } from './services/pokedex-builder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pkdx';
  pokedex = [];

  constructor(
    private primengConfig: PrimeNGConfig,
    private httpService: HttpService,
    private pokedexBuilder: PokedexBuilderService
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;

    // build pokedex object
    this.httpService.getKantoDex().subscribe((kantoDex) => {
      // TODO: Clean up hard coded kantoDex build
      this.pokedex = this.pokedexBuilder.getPokedex(
        kantoDex['pokemon_entries']
      );

      //this.pokedex.sort((a, b) => parseInt(a.number) - parseInt(b.number));
      //console.log(this.pokedex);
    });
  }
}
