import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// SERVICES
import { SpotifyService } from './services/spotify.service';

// COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent, 
         SearchComponent, 
         HeaderComponent } from './components/index.components';

// ROUTES
import { APP_ROUTING } from './app.routes';        

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
