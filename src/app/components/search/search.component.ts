import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  search: string = "";
  constructor(private spotifySrv: SpotifyService) { 
    //console.log("Servicio de spotify listo para usarse");
  }

  ngOnInit() {
    
  }

  searchArtist(){
    this.spotifySrv.getArtists(this.search)
    .subscribe();

  }

}
