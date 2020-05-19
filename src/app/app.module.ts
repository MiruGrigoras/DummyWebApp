import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const AppRoutes: Routes = [
  {path:'', redirectTo:'main', pathMatch:'full'},
  {path:'main', component: MainComponent, children:[
      {path:'', redirectTo: 'calculator'},
      {path:'calculator', component: CalculatorComponent},
      {path:'wiki', component: WikiComponent}
  ]},
  {path: '**', redirectTo:'main'}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CalculatorComponent,
    WikiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
