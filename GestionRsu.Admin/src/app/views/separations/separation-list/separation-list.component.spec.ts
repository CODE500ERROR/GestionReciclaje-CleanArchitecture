import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparationListComponent } from './separation-list.component';

describe('SeparationListComponent', () => {
  let component: SeparationListComponent;
  let fixture: ComponentFixture<SeparationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeparationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
