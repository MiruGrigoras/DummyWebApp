import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiTabsComponent } from './wiki-tabs.component';

describe('WikiTabsComponent', () => {
  let component: WikiTabsComponent;
  let fixture: ComponentFixture<WikiTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
