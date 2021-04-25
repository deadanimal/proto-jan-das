import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestasiGPISComponent } from './prestasi-gpis.component';

describe('PrestasiGPISComponent', () => {
  let component: PrestasiGPISComponent;
  let fixture: ComponentFixture<PrestasiGPISComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestasiGPISComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestasiGPISComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
