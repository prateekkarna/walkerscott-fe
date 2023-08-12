import { TestBed } from '@angular/core/testing';

import { ArticlesQueryService } from './articles-query.service';

describe('ArticlesQueryService', () => {
  let service: ArticlesQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlesQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
