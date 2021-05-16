import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparationCreateComponent } from './separation-create.component';

describe('SeparationCreateComponent', () => {
  let component: SeparationCreateComponent;
  let fixture: ComponentFixture<SeparationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeparationCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
