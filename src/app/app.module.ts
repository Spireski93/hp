import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotesComponent } from './notes/notes.component';
import { GoogleSearchComponent } from './google-search/google-search.component';
import { DailyTextsComponent } from './daily-texts/daily-texts.component';
import { MainIconsComponent } from './main-icons/main-icons.component';
import { SingleIconComponent } from './single-icon/single-icon.component';
import { BlocksComponent } from './blocks/blocks.component';
import { SingleBlockComponent } from './single-block/single-block.component';
import { WeatherComponent } from './weather/weather.component';
import { FormsModule }   from '@angular/forms';
/* Da vidime dali ke se koristi */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotesComponent,
    GoogleSearchComponent,
    DailyTextsComponent,
    MainIconsComponent,
    SingleIconComponent,
    BlocksComponent,
    SingleBlockComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
