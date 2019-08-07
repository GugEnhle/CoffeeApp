import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuppuccinoPage } from './cuppuccino.page';

describe('CuppuccinoPage', () => {
  let component: CuppuccinoPage;
  let fixture: ComponentFixture<CuppuccinoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuppuccinoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuppuccinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
