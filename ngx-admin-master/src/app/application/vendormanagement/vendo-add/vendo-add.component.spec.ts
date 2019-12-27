import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendoAddComponent } from './vendo-add.component';

describe('VendoAddComponent', () => {
  let component: VendoAddComponent;
  let fixture: ComponentFixture<VendoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
