import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  search: string = "";
  constructor(private spotifySrv: SpotifyService, private router: Router) { 
    //console.log("Servicio de spotify listo para usarse");
  }

  ngOnInit() {
    
  }

  searchArtist(){
    this.spotifySrv.getArtists(this.search)
    .subscribe();
  }

  showArtist(id: string) {
    //console.log(id);
    this.router.navigate(['/artist', id]);
  }

}
