import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { NoimagePipe } from '../../pipes/noimage.pipe';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

  artist: any;
  sounds: any;

  constructor(private activatedRoute: ActivatedRoute, private spotifySrv: SpotifyService ) { 
  }

  ngOnInit() {
    
    this.activatedRoute.params.subscribe( params =>  {
      let id = params['id'];
          
          this.spotifySrv.getArtist(id)
            .subscribe( data => {
              this.artist = data
              console.log(this.artist);
            })

          this.spotifySrv.getSoundTracks(id)
            .subscribe( data => {
              this.sounds = data;
               console.log(data)
              })  
    })
  }
}
