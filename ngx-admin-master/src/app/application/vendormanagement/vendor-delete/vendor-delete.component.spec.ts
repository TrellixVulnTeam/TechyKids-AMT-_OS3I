import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDeleteComponent } from './vendor-delete.component';

describe('VendorDeleteComponent', () => {
  let component: VendorDeleteComponent;
  let fixture: ComponentFixture<VendorDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
