import { TestBed } from '@angular/core/testing';

import { ArticlesCommandService } from './articles-command.service';

describe('ArticlesCommandService', () => {
  let service: ArticlesCommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlesCommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
