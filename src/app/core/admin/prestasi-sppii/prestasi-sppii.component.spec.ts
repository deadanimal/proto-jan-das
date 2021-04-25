import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestasiSPPIIComponent } from './prestasi-sppii.component';

describe('PrestasiSPPIIComponent', () => {
  let component: PrestasiSPPIIComponent;
  let fixture: ComponentFixture<PrestasiSPPIIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestasiSPPIIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestasiSPPIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
