import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Pokemon } from './models/pokemon';
import { HttpService } from './services/http.service';
import { PokedexBuilderService } from './services/pokedex-builder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pkdx';

  constructor(
    private primengConfig: PrimeNGConfig,
    private httpService: HttpService,
    private pokedexBuilder: PokedexBuilderService
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
