import { async } from '@angular/core/testing';
import { FilterPipe } from './filter.pipe';

describe('Filter pipe', () => {
  let filterPipe: any;
  beforeEach(async(() => {
    filterPipe = new FilterPipe();
  }));

  it('should return empty list when items list is undefined', () => {
    expect(filterPipe.transform(undefined, 'searchKeyword')).toEqual([]);
  });

  it('should return empty list when items list is null', () => {
    expect(filterPipe.transform(null, 'searchKeyword')).toEqual([]);
  });

  it('should return same item list when search keyword is undefined', () => {
    const items = ['item1', 'item2'];

    expect(filterPipe.transform(items, undefined)).toEqual(items);
  });

  it('should return same item list when search keyword is null', () => {
    const items = ['item1', 'item2'];

    expect(filterPipe.transform(items, null)).toEqual(items);
  });

  it('should return filtered items based on search keyword', () => {
    const items = ['abc', 'def', 'ghi', 'ijk'];

    expect(filterPipe.transform(items, 'i')).toEqual(['ghi', 'ijk']);
  });

  it('should return empty items when no items match with search keyword', () => {
    const items = ['abc', 'def', 'ghi', 'ijk'];

    expect(filterPipe.transform(items, 'keof')).toEqual([]);
  });
});
