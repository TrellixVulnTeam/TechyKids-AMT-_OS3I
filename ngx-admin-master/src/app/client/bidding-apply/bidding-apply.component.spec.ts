import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingApplyComponent } from './bidding-apply.component';

describe('BiddingApplyComponent', () => {
  let component: BiddingApplyComponent;
  let fixture: ComponentFixture<BiddingApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiddingApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddingApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
