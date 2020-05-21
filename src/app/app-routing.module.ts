import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {WikiComponent} from './wiki/wiki.component';
import {CalculatorComponent} from './calculator/calculator.component';


const routes: Routes = [
  {path:'', redirectTo:'main', pathMatch:'full'},
  {path:'main', component: MainComponent, children:[
      {path:'', redirectTo: 'calculator', pathMatch:'full'},
      {path:'calculator', component: CalculatorComponent},
      {path:'wiki', component: WikiComponent, children:[
          {path:'', component: WikiTabsComponent, children:[
            {path:'', redirectTo: 'info', pathMatch:'full'},
            {path:'info', component: WikiTabsComponent},
            {path:'reviews', component: WikiComponent},
            ]},
      ]},
  ]},
  {path: '**', redirectTo:'main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
