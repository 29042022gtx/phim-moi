import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai8Lab1Component } from './bai8-lab1.component';

describe('Bai8Lab1Component', () => {
  let component: Bai8Lab1Component;
  let fixture: ComponentFixture<Bai8Lab1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bai8Lab1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai8Lab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
