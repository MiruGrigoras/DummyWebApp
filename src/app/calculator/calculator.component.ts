import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  allBands: any[];
  allSeries: any[];
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
  }

}
