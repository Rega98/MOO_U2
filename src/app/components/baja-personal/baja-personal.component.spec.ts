import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaPersonalComponent } from './baja-personal.component';

describe('BajaPersonalComponent', () => {
  let component: BajaPersonalComponent;
  let fixture: ComponentFixture<BajaPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajaPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
