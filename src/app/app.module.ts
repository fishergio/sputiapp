import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
