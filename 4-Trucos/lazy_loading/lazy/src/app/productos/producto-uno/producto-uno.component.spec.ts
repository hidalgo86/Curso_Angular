import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoUnoComponent } from './producto-uno.component';

describe('ProductoUnoComponent', () => {
  let component: ProductoUnoComponent;
  let fixture: ComponentFixture<ProductoUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
