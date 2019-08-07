import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RooibosTeaPage } from './rooibos-tea.page';

describe('RooibosTeaPage', () => {
  let component: RooibosTeaPage;
  let fixture: ComponentFixture<RooibosTeaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RooibosTeaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RooibosTeaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
