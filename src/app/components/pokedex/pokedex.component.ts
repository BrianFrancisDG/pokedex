import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { HttpService } from 'src/app/services/http.service';
import { PokedexBuilderService } from 'src/app/services/pokedex-builder.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  pokedex: Pokemon[] = [];

  constructor(
    private httpService: HttpService,
    private pokedexBuilder: PokedexBuilderService
  ) {}

  ngOnInit(): void {
    // build pokedex object
    this.httpService.getKantoDex().subscribe(async (kantoDex) => {
      // TODO: Clean up hard coded kantoDex build
      this.pokedex = await this.pokedexBuilder.getPokedex(
        kantoDex['pokemon_entries']
      );
    });
  }
}
