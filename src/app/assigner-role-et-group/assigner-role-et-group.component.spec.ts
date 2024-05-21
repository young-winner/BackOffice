import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignerRoleEtGroupComponent } from './assigner-role-et-group.component';

describe('AssignerRoleEtGroupComponent', () => {
  let component: AssignerRoleEtGroupComponent;
  let fixture: ComponentFixture<AssignerRoleEtGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignerRoleEtGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignerRoleEtGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
