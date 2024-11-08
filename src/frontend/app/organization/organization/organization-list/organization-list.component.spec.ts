import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationListComponent } from './organization-list.component';

describe('DescribeOrganizationListcomponent', () => {
  let component: OrganizationListComponent;
  let fixture: ComponentFixture<OrganizationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizationListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
