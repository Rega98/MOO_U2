import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraConsultaComponent } from './registra-consulta.component';

describe('RegistraConsultaComponent', () => {
  let component: RegistraConsultaComponent;
  let fixture: ComponentFixture<RegistraConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistraConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
