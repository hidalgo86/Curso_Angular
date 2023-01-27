import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoTresComponent } from './producto-tres.component';

describe('ProductoTresComponent', () => {
  let component: ProductoTresComponent;
  let fixture: ComponentFixture<ProductoTresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoTresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
