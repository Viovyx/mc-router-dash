import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouteItem } from './route-item';

describe('RouteItem', () => {
  let component: RouteItem;
  let fixture: ComponentFixture<RouteItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteItem]
    }).compileComponents();

    fixture = TestBed.createComponent(RouteItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
