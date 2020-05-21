import {Component, Input, OnInit} from '@angular/core';
import {MyReview} from "../app.model";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  @Input()
  reviews: Array<MyReview>;
  newReview: MyReview;

  constructor() {
    this.newReview = {};
  }

  ngOnInit() {
  }

  public onSubmit() {
    this.newReview.createdOn = new Date().getMilliseconds();
    this.reviews.push(this.newReview);
    this.newReview = {};
  }
}

