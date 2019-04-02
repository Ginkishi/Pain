import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirPage } from './voir.page';

describe('VoirPage', () => {
  let component: VoirPage;
  let fixture: ComponentFixture<VoirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
