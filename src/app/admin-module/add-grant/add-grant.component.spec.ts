import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGrantComponent } from './add-grant.component';

describe('AddGrantComponent', () => {
  let component: AddGrantComponent;
  let fixture: ComponentFixture<AddGrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGrantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
