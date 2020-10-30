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
         // tslint:disable-next-line: no-string-literal
         this.nuevasCanciones = data;
         console.log(this.nuevasCanciones);
       });
   }




}
