import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsModule } from '@angular/google-maps'
import {FormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MainComponent} from './main/main.component';
import {WikiComponent} from './wiki/wiki.component';
import {CalculatorComponent} from './calculator/calculator.component';
import { ExternalLinkDirective } from './extrenal-link.directive';
import { WikiTabsComponent } from './wiki-tabs/wiki-tabs.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CalculatorComponent,
    WikiComponent,
    ExternalLinkDirective,
    WikiTabsComponent,
    ReviewsComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTabsModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    GoogleMapsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
