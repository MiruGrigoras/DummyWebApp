import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  allTabs: any[];
  activeLinkIndex =-1;
  constructor(private router:Router) {
    this.allTabs = [
    {
      label:'Calculator',
      link:'./calculator',
      index:0
    },{
      label:'Wiki',
      link:'./wiki',
      index:0
    }];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res)=>{
      this.activeLinkIndex =this.allTabs.indexOf(this.allTabs.find(tab => tab.link === '.' + this.router.url));
    })
  }

}
