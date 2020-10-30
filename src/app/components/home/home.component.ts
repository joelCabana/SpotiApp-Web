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
  loading:boolean;
  constructor(private spotify: SpotifyService) {

    this.loading = true;

    /**Obtiene los nuevos lanzamientos */
     this.spotify.getNewReleasses().subscribe(
       (data: any ) => {
         this.nuevasCanciones = data;
          this.loading = false;
       });
   }




}
