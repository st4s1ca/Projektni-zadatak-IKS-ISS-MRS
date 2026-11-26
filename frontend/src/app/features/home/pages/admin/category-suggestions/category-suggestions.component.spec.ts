import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategorySuggestions } from './category-suggestions.component';

describe('CategorySuggestions', () => {
  let component: CategorySuggestions;
  let fixture: ComponentFixture<CategorySuggestions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategorySuggestions],
    }).compileComponents();

    fixture = TestBed.createComponent(CategorySuggestions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
