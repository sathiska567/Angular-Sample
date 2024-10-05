import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFeachesComponent } from './admin-feaches.component';

describe('AdminFeachesComponent', () => {
  let component: AdminFeachesComponent;
  let fixture: ComponentFixture<AdminFeachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminFeachesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFeachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
