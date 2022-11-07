import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportCardComponent } from './export-card.component';

describe('ExportCardComponent', () => {
  let component: ExportCardComponent;
  let fixture: ComponentFixture<ExportCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
