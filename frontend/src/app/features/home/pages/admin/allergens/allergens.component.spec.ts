import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Allergens } from './allergens.component';

describe('Allergens', () => {
  let component: Allergens;
  let fixture: ComponentFixture<Allergens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Allergens],
    }).compileComponents();

    fixture = TestBed.createComponent(Allergens);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
