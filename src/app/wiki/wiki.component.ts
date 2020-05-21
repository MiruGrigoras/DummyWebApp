import { Component, OnInit } from '@angular/core';
import {MyObj} from "../app.model";
import {OBJ} from "../app.data";

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {
  objects: Array<MyObj>;
  constructor() {
    this.objects = OBJ;
  }

  ngOnInit(): void {
  }

}
