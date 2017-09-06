import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  constructor(private spotifySrv: SpotifyService) { 
    console.log("Servicio de spotify listo para usarse");
  }

  ngOnInit() {
    this.spotifySrv.getArtists('metallica')
        .subscribe( data => {
          console.log('Data de Search.component');
          console.log(data);
        })
  }

}
