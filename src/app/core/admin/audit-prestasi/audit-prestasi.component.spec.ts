import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditPrestasiComponent } from './audit-prestasi.component';

describe('AuditPrestasiComponent', () => {
  let component: AuditPrestasiComponent;
  let fixture: ComponentFixture<AuditPrestasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditPrestasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditPrestasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
