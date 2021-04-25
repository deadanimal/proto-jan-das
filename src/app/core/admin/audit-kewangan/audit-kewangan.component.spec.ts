import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditKewanganComponent } from './audit-kewangan.component';

describe('AuditKewanganComponent', () => {
  let component: AuditKewanganComponent;
  let fixture: ComponentFixture<AuditKewanganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditKewanganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditKewanganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
