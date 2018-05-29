import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatmapTjxComponent } from './heatmap-tjx.component';

describe('HeatmapTjxComponent', () => {
  let component: HeatmapTjxComponent;
  let fixture: ComponentFixture<HeatmapTjxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatmapTjxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatmapTjxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
