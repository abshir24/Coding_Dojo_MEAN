import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbidsComponent } from './allbids.component';

describe('AllbidsComponent', () => {
  let component: AllbidsComponent;
  let fixture: ComponentFixture<AllbidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllbidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllbidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
