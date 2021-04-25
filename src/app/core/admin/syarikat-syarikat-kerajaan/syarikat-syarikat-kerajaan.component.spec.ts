import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyarikatSyarikatKerajaanComponent } from './syarikat-syarikat-kerajaan.component';

describe('SyarikatSyarikatKerajaanComponent', () => {
  let component: SyarikatSyarikatKerajaanComponent;
  let fixture: ComponentFixture<SyarikatSyarikatKerajaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyarikatSyarikatKerajaanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyarikatSyarikatKerajaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
