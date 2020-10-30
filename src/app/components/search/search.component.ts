import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {
artistas: any[] = [];
  constructor(private spotify: SpotifyService) { }

// tslint:disable-next-line: typedef
  buscar(termino: string){
  this.spotify.getArtista(termino).subscribe(
    (data: any) => {
      console.log(data.artists);
      this.artistas = data.artists.items;
      console.log(this.artistas);
    });
  }

}
