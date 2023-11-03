import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAnimalesComponent } from './listar-animales.component';

describe('ListarAnimalesComponent', () => {
  let component: ListarAnimalesComponent;
  let fixture: ComponentFixture<ListarAnimalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarAnimalesComponent]
    });
    fixture = TestBed.createComponent(ListarAnimalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
