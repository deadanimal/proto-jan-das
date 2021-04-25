import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KewanganIgfmasComponent } from './kewangan-igfmas.component';

describe('KewanganIgfmasComponent', () => {
  let component: KewanganIgfmasComponent;
  let fixture: ComponentFixture<KewanganIgfmasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KewanganIgfmasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KewanganIgfmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
