import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditSyarikatKerajaanComponent } from './audit-syarikat-kerajaan.component';

describe('AuditSyarikatKerajaanComponent', () => {
  let component: AuditSyarikatKerajaanComponent;
  let fixture: ComponentFixture<AuditSyarikatKerajaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditSyarikatKerajaanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditSyarikatKerajaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
