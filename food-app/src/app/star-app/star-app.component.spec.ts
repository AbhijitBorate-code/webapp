import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarAppComponent } from './star-app.component';

describe('StarAppComponent', () => {
  let component: StarAppComponent;
  let fixture: ComponentFixture<StarAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
