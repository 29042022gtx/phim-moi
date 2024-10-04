import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai7Lab1Component } from './bai7-lab1.component';

describe('Bai7Lab1Component', () => {
  let component: Bai7Lab1Component;
  let fixture: ComponentFixture<Bai7Lab1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bai7Lab1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai7Lab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
