import {Component, Input} from "@angular/core";
import {MyObj} from "../app.model";

@Component({
  selector: 'app-wiki-tabs',
  templateUrl: './wiki-tabs.component.html',
  styleUrls: ['./wiki-tabs.component.css']
})
export class WikiTabsComponent implements OnInit {

  @Input()
  private obj: MyObj;

  private tab: number;

  constructor() {
    this.tab = 1;
  }

  public selectTab(tid: number) {
    this.tab = tid;
  }

  public isSelected(tid: number): boolean {
    return this.tab === tid;
  }
}
