import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// SERVICES
import { SpotifyService } from './services/spotify.service';

// COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent, 
         SearchComponent, 
         HeaderComponent, ArtistComponent } from './components/index.components';

// ROUTES
import { APP_ROUTING } from './app.routes';
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomsurePipe } from './pipes/domsure.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    HeaderComponent,
    ArtistComponent,
    NoimagePipe,
    DomsurePipe
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
