import { createPinia, setActivePinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils';
import NavBar from '../NavBar.vue';
import { useSearchStore } from '../../stores/searchStore'

describe('NavBar', () => {
    beforeEach(() => {
      setActivePinia(createPinia());
    })

    it('displays the correct number of movies', async () => {
        const wrapper = mount(NavBar);
        const store = useSearchStore();
    
        const moviesCount = wrapper.find('p').text();
        expect(store.getMoviesLength + " movie found").toBe(moviesCount);
      });
    
      it('applies "RELEASE DATE" button when clicked', async () => {
        const wrapper = mount(NavBar);
        const store = useSearchStore();
    
        await wrapper.find('div[name="nav-bar__body"]').findAll('button')[0].trigger('click');
        expect(store.getSortBy).toBe('releaseDate');
      });
    
      it('applies "RATING" button when clicked', async () => {
        const wrapper = mount(NavBar);
        const store = useSearchStore();
    
        await wrapper.find('div[name="nav-bar__body"]').findAll('button')[1].trigger('click');
        expect(store.getSortBy).toBe('rating');
      });

})