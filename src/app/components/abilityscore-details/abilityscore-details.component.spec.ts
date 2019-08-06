import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityscoreDetailsComponent } from './abilityscore-details.component';

describe('AbilityscoreDetailsComponent', () => {
  let component: AbilityscoreDetailsComponent;
  let fixture: ComponentFixture<AbilityscoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbilityscoreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilityscoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
