import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTechnologyComponent } from './menu-technology.component';

describe('MenuTechnologyComponent', () => {
  let component: MenuTechnologyComponent;
  let fixture: ComponentFixture<MenuTechnologyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuTechnologyComponent]
    });
    fixture = TestBed.createComponent(MenuTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
