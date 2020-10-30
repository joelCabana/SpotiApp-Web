import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {

   }

  // tslint:disable-next-line: typedef
  getNewReleasses(){

    const headers = new HttpHeaders({
      // tslint:disable-next-line: object-literal-key-quotes
      'Authorization': 'Bearer BQB90BY-L9Jrd0DkKoIBwLY3mL0k8BS2fTQvK5cUyBoChTWWOJG8UfG_a3QpHtS1RQ-zCOb35CVORbUdtZs'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers} );
   }
}
