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
      'Authorization': 'Bearer BQBFwEfy7k6m2a-zh8ivm_Eeby0hui9_slj6u8uwFVguzd3MJ7NH38gqQyVUY9I_Z_RtHc5R1qiJ5H91GnI'
    });

    return this.http.get(url, {headers});
   }

  getNewReleasses(){
    return this.getQuery('browse/new-releases')
    .pipe( map(data =>  data['albums'].items
     ));
   }

   getArtista(termino: string){
    return this.getQuery(`search?query=${termino}&type=artist&offset=0&limit=20`)
    .pipe(map(data => data['artists'].items
    ));
   }

}
