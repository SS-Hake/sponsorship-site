import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderLockupComponent } from './header-lockup/header-lockup.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { MapComponent } from './map/map.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { VideosComponent } from './videos/videos.component';
import { BlurbComponent } from './blurb/blurb.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderLockupComponent,
    CountdownTimerComponent,
    MapComponent,
    SocialMediaComponent,
    VideosComponent,
    BlurbComponent,
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    LeafletModule.forRoot(),
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
