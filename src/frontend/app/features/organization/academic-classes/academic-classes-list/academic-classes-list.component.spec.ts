import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicClassesListComponent } from './academic-classes-list.component';

describe('DescribeAcademicClassesListcomponent', () => {
  let component: AcademicClassesListComponent;
  let fixture: ComponentFixture<AcademicClassesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicClassesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicClassesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
