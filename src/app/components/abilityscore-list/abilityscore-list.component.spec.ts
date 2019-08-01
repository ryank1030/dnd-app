import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityscoreListComponent } from './abilityscore-list.component';

describe('AbilityscoreListComponent', () => {
  let component: AbilityscoreListComponent;
  let fixture: ComponentFixture<AbilityscoreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbilityscoreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilityscoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
