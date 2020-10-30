import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  artista: any= {};
  loading : boolean;
  topTracks:any[] = [];

  constructor(private router: ActivatedRoute,
              private spotify:SpotifyService) { 
      this.loading = true;
      this.router.params.subscribe(
      params=>{
        this.getArtista(params['id']);
        this.getTopTrack(params['id']);
      })
  }


  getArtista (id:string){
  this.spotify.getArtista(id).subscribe(
    artista=>{
      console.log(artista)
      this.artista = artista;
      this.loading = false;
    });
  }

 getTopTrack(id:string){
 this.spotify.getTopTrak(id).subscribe(
   topTrack => {
     console.log(topTrack);
     this.topTracks = topTrack;
   })
 }

}
