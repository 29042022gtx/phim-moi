import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai5Lab1Component } from './bai5-lab1.component';

describe('Bai5Lab1Component', () => {
  let component: Bai5Lab1Component;
  let fixture: ComponentFixture<Bai5Lab1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bai5Lab1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai5Lab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
