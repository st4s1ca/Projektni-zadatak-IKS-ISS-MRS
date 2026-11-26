import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeManagement } from './recipe-management.component';

describe('RecipeManagement', () => {
  let component: RecipeManagement;
  let fixture: ComponentFixture<RecipeManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeManagement],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeManagement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
