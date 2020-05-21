import { Component, OnInit } from '@angular/core';
import { MyCoordinates } from '../app.model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  allBands: any[];
  allSeries: any[];
  newCoords: MyCoordinates;
  private lat:number;
  private long: number;
  goToLink: string;
  constructor() {
    this.allBands = [
    {
      value: '5.8FccIc',
      viewValue: '5.8 GHz FCC/IC Integrated',
    },
    {
      value: '5.4Fcc',
      viewValue: '5.4 GHz FCC Integrated',
    },
    {
      value: '5.4Ic',
      viewValue: '5.4 GHz IC Integrated',
    },
    {
      value: '3.6FccIc',
      viewValue: '3.6 GHz FCC/IC Integrated',
    },
    {
      value: '3.5Ic',
      viewValue: '3.5 GHz IC Integrated',
    }];
    this.allSeries=[
      {
         value: 'd+',
         viewValue: 'RADWIN 2000 D+',
      },
      {
         value: 'c+',
         viewValue: 'RADWIN 2000 C+',
      },
      {
         value: 'c',
         viewValue: 'RADWIN 2000 C',
      },
      {
         value: 'b',
         viewValue: 'RADWIN 2000 B',
      },
      {
         value: 'x',
         viewValue: 'RADWIN 2000 X',
      }];
  }

  ngOnInit(): void {
    this.newCoords = {
      degreesLat: 0,
      degreesLong: 0,
      latNS: "",
      longEW: "",
      minutesLat: 0,
      minutesLong: 0,
      secondsLat: 0,
      secondsLong: 0
    };
  }

  goToGMapsLink(){
    this.lat = this.newCoords.degreesLat + this.newCoords.minutesLat/60  + this.newCoords.secondsLat/3600;
    this.long = this.newCoords.degreesLong + this.newCoords.minutesLong/60  + this.newCoords.secondsLong/3600;
    if(this.newCoords.latNS === "S")
      this.lat = this.lat * (-1);
    if(this.newCoords.longEW === "W")
      this.long = this.long * (-1);
    this.goToLink = "https://www.google.com/maps/search/?api=1&query=" + this.lat + "," + this.long;
    console.log(this.newCoords);
    console.log(this.lat);
    console.log(this.long);
    this.goToPage(this.goToLink);
  }

  goToPage(url: string): void {
    window.open(url, "_blank");
  }

}
