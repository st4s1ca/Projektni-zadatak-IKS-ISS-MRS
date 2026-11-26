import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngredientCategories } from './ingredient-categories.component';

describe('IngredientCategories', () => {
  let component: IngredientCategories;
  let fixture: ComponentFixture<IngredientCategories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IngredientCategories],
    }).compileComponents();

    fixture = TestBed.createComponent(IngredientCategories);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
