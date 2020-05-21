import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsModule } from '@angular/google-maps'
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MainComponent} from './main/main.component';
import {WikiComponent} from './wiki/wiki.component';
import {CalculatorComponent} from './calculator/calculator.component';
import { WikiTabsComponent } from './wiki-tabs/wiki-tabs.component';
import { ReviewsComponent } from './reviews/reviews.component';
import {FormsModule} from "@angular/forms";
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CalculatorComponent,
    WikiComponent,
    WikiTabsComponent,
    ReviewsComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    GoogleMapsModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
