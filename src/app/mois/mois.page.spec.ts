import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoisPage } from './mois.page';

describe('MoisPage', () => {
  let component: MoisPage;
  let fixture: ComponentFixture<MoisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
