import { async, TestBed } from '@angular/core/testing';
import { ActivitiesModule } from './activities.module';

describe('ActivitiesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ActivitiesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ActivitiesModule).toBeDefined();
  });
});
