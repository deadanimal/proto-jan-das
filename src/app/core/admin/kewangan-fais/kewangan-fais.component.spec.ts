import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KewanganFaisComponent } from './kewangan-fais.component';

describe('KewanganFaisComponent', () => {
  let component: KewanganFaisComponent;
  let fixture: ComponentFixture<KewanganFaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KewanganFaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KewanganFaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
