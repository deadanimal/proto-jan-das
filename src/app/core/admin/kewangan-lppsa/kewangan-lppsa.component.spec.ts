import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KewanganLppsaComponent } from './kewangan-lppsa.component';

describe('KewanganLppsaComponent', () => {
  let component: KewanganLppsaComponent;
  let fixture: ComponentFixture<KewanganLppsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KewanganLppsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KewanganLppsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
