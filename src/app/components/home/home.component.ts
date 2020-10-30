import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent  {


  nuevasCanciones: any[] = [];

  constructor(private spotify: SpotifyService) {

     this.spotify.getNewReleasses().subscribe(
       (data: any ) => {
         console.log(data.albums.items);
         // tslint:disable-next-line: no-string-literal
         this.nuevasCanciones = data['albums'].items;
         console.log(this.nuevasCanciones);
       });
   }




}
