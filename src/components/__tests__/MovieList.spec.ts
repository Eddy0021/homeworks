import { createPinia, setActivePinia } from 'pinia'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils';
import MovieList from '../MovieList.vue';
import { useSearchStore } from '../../stores/searchStore'


describe('MovieList', () => {
    beforeEach(() => {
      setActivePinia(createPinia());
    })

    it('displays movie cards when movies are present', async () => {
        const wrapper = mount(MovieList);
    
        await wrapper.vm.$nextTick();
    
        const movieCards = wrapper.findAllComponents({ name: 'MovieCard' });
        expect(movieCards.length).greaterThan(0);
      });
    
      it('displays "No films found" message when movies array is empty', async () => {
        const wrapper = mount(MovieList);
        const store = useSearchStore();
    
        store.setSearchQuery("Temp movie");

        await wrapper.vm.$nextTick();

        const warningMessage = wrapper.get('h1').text();
        expect(warningMessage).toBe('No films found');
      });
    
      it('navigates to the movie details page when a movie card is clicked', async () => {
        const routerMock = {
          push: vi.fn(),
        };
    
        const wrapper = mount(MovieList, {
          global: {
            mocks: {
              $router: routerMock,
            },
          },
        });

      await wrapper.vm.$nextTick();

      const movieCard = wrapper.findComponent({ name: 'MovieCard' });
      await movieCard.trigger('click');

      // Assuming you have access to the router in your component
      const router = wrapper.vm.$router;

      // Verify that the router navigated to the correct route
      expect(router.currentRoute.value.name).toBe('movie');
      expect(router.currentRoute.value.params.id).toBe(97); // Adjust the expected ID accordingly
    });
})