import { createPinia, setActivePinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { useSearchStore } from '../../stores/searchStore'

describe('useSearchStore', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    })

  it('updates searchQuery correctly', () => {
    const store = useSearchStore();

    store.setSearchQuery('test query');

    expect(store.getSearchQuery).toBe('test query');
  });

  it('updates searchBy correctly', () => {
    const store = useSearchStore();

    store.setSearchBy('genre');

    expect(store.getSearchBy).toBe('genre');
  });

  it('updates sortBy correctly', () => {
    const store = useSearchStore();

    store.setSortBy('rating');

    expect(store.getSortBy).toBe('rating');
  });

  it('updates moviesLength correctly', () => {
    const store = useSearchStore();

    store.setMoviesLength(10);

    expect(store.getMoviesLength).toBe(10);
  });
});
