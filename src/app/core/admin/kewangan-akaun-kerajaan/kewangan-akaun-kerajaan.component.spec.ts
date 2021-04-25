import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KewanganAkaunKerajaanComponent } from './kewangan-akaun-kerajaan.component';

describe('KewanganAkaunKerajaanComponent', () => {
  let component: KewanganAkaunKerajaanComponent;
  let fixture: ComponentFixture<KewanganAkaunKerajaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KewanganAkaunKerajaanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KewanganAkaunKerajaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
