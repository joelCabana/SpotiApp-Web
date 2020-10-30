import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor(private http: HttpClient) {

   }

   // tslint:disable-next-line: typedef
   getQuery(query: string){
     // tslint:disable-next-line: no-unused-expression
     const url = `https://api.spotify.com/v1/${query}`;

     const headers = new HttpHeaders({
      // tslint:disable-next-line: object-literal-key-quotes
      'Authorization': 'Bearer BQBaDLSnYqbFQv2XMG8Lv5idozT-5GxcI8rm3vLLMlwJ6_k3NY4A266Hn8y48T6Kk7PINkIh4EUuStemAoQ'
    });

    // tslint:disable-next-line: align
    return this.http.get(url, {headers});
   }

  // tslint:disable-next-line: typedef
  getNewReleasses(){
    return this.getQuery('browse/new-releases')
    .pipe(
      map(data => {
          // tslint:disable-next-line: no-string-literal
          return data['albums'].items;
      }));
   }


   // tslint:disable-next-line: typedef
   getArtista(termino: string){
    return this.getQuery(`search?query=${termino}&type=artist&offset=0&limit=20`).pipe(map(data => {
      // tslint:disable-next-line: no-string-literal
      return data['artists'].items;
    }));

   }
}
