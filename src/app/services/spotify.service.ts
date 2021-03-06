import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {

   }

   getQuery(query: string){
     const url = `https://api.spotify.com/v1/${query}`;

     const headers = new HttpHeaders({
      'Authorization': 'Bearer QCtXM-2OrcCHBoXVXNZsdL32RUV1Dh-6idJvPvish3EV-AYLTf491PIw78LeYgWgLxE-KDJD_g0sJdoe4o'
    });

    return this.http.get(url, {headers});
   }

  getNewReleasses(){
    return this.getQuery('browse/new-releases')
    .pipe( map(data =>  data['albums'].items
     ));
   }

   getArtistas(termino: string){
    return this.getQuery(`search?query=${termino}&type=artist&offset=0&limit=20`)
    .pipe(map(data => data['artists'].items
    ));
   }


   getArtista(id: string){
    return this.getQuery(`artists/${id}`);
   }


   getTopTrak(id: string){
    return this.getQuery(`artists/${id}/top-tracks?market=us`)
    .pipe(map(data => data['tracks']
    ));
   }


}
