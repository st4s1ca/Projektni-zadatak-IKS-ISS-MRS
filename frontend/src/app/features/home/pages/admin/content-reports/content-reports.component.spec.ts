import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentReports } from './content-reports.component';

describe('ContentReports', () => {
  let component: ContentReports;
  let fixture: ComponentFixture<ContentReports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentReports],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentReports);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
