import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoDosComponent } from './producto-dos.component';

describe('ProductoDosComponent', () => {
  let component: ProductoDosComponent;
  let fixture: ComponentFixture<ProductoDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
