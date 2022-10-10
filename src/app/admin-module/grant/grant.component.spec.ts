import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantComponent } from './grant.component';

describe('GrantComponent', () => {
  let component: GrantComponent;
  let fixture: ComponentFixture<GrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
