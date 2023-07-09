import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbreedsComponent } from './topbreeds.component';

describe('TopbreedsComponent', () => {
  let component: TopbreedsComponent;
  let fixture: ComponentFixture<TopbreedsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopbreedsComponent]
    });
    fixture = TestBed.createComponent(TopbreedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
