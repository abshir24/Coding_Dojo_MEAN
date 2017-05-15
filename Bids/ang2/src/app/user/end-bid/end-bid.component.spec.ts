import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndBidComponent } from './end-bid.component';

describe('EndBidComponent', () => {
  let component: EndBidComponent;
  let fixture: ComponentFixture<EndBidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndBidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
