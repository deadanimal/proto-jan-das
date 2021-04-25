import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyarikatPengauditanComponent } from './syarikat-pengauditan.component';

describe('SyarikatPengauditanComponent', () => {
  let component: SyarikatPengauditanComponent;
  let fixture: ComponentFixture<SyarikatPengauditanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyarikatPengauditanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyarikatPengauditanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
