import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingCreationComponent } from './bidding-creation.component';

describe('BiddingCreationComponent', () => {
  let component: BiddingCreationComponent;
  let fixture: ComponentFixture<BiddingCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiddingCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddingCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
