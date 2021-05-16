import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparationEditComponent } from './separation-edit.component';

describe('SeparationEditComponent', () => {
  let component: SeparationEditComponent;
  let fixture: ComponentFixture<SeparationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeparationEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
