import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAnimalComponent } from './registrar-animal.component';

describe('RegistrarAnimalComponent', () => {
  let component: RegistrarAnimalComponent;
  let fixture: ComponentFixture<RegistrarAnimalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarAnimalComponent]
    });
    fixture = TestBed.createComponent(RegistrarAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
