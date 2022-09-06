import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodayComponent } from './components/today/today.component';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { WeekComponent } from './components/week/week.component';
import { DayComponent } from './components/week/day/day.component';
import { HttpClientModule } from '@angular/common/http';
import { BotonesComponent } from './components/botones/botones.component';
import { SearchComponent } from './components/search/search.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    HighlightsComponent,
    WeekComponent,
    DayComponent,
    BotonesComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
