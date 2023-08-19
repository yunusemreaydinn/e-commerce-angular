import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuClothesComponent } from './menu-clothes.component';

describe('MenuClothesComponent', () => {
  let component: MenuClothesComponent;
  let fixture: ComponentFixture<MenuClothesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuClothesComponent]
    });
    fixture = TestBed.createComponent(MenuClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
