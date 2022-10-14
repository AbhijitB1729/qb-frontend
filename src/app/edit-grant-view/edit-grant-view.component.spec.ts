import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGrantViewComponent } from './edit-grant-view.component';

describe('EditGrantViewComponent', () => {
  let component: EditGrantViewComponent;
  let fixture: ComponentFixture<EditGrantViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGrantViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditGrantViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
