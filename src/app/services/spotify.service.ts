import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists:any[] = [];
  
  urlSearch: string = 'https://api.spotify.com/v1/search';
  urlArtist: string = 'https://api.spotify.com/v1/artists'
  
  constructor(private http: Http) {  
  }

  getArtists( search: string){

    let headers = new Headers();
    headers.append('authorization', 'Bearer BQCRkukDUdRHfRIGO9deqS6sDNirZsynTOPqCM1dt-3a3G9V8uMFOy6RiYnSIZDLEu8zkKbxParFtVTeyFW3iQ')
    
  
    let query = `?q=${ search }&type=artist`;
    let url = this.urlSearch + query;

    return this.http.get( url, { headers } )
            .map( res => {
              this.artists = res.json().artists.items;
              //console.log(this.artists);
              //return res.json().artists.items;
            })
  }
  
  getArtist( id: string){

    let headers = new Headers();
    headers.append('authorization', 'Bearer BQCRkukDUdRHfRIGO9deqS6sDNirZsynTOPqCM1dt-3a3G9V8uMFOy6RiYnSIZDLEu8zkKbxParFtVTeyFW3iQ')

    let query = `/${ id }`;
    let url = this.urlArtist + query;

    return this.http.get( url, { headers } )
            .map( res => {
              return res.json();
            })
  }

  getSoundTracks( id: string){

    let headers = new Headers();
    headers.append('authorization', 'Bearer BQCRkukDUdRHfRIGO9deqS6sDNirZsynTOPqCM1dt-3a3G9V8uMFOy6RiYnSIZDLEu8zkKbxParFtVTeyFW3iQ')

    let query = `/${ id }/top-tracks?country=MX`;
    let url = this.urlArtist + query;

    return this.http.get( url, { headers } )
            .map( res => {
              return res.json().tracks;
            })
  }
}