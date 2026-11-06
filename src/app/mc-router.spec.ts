import { TestBed } from '@angular/core/testing';
import { McRouter } from './mc-router';

describe('McRouter', () => {
  let service: McRouter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(McRouter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
