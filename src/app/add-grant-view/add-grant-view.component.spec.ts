import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGrantViewComponent } from './add-grant-view.component';

describe('AddGrantViewComponent', () => {
  let component: AddGrantViewComponent;
  let fixture: ComponentFixture<AddGrantViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGrantViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGrantViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
