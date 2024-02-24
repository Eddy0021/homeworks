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
        const mockRoute = {
          params: {
            id: 97
          }
        }

        const routerMock = {
          push: vi.fn(),
        };
    
        const wrapper = mount(MovieList, {
          global: {
           mocks: {
              $route: mockRoute,
              $router: routerMock
            }
          },
        });

      await wrapper.vm.$nextTick();

      const movieCard = wrapper.findComponent({ name: 'MovieCard' });
      await movieCard.trigger('click');

      expect(routerMock.push).toHaveBeenCalledTimes(1)
      expect(routerMock.push).toHaveBeenCalledWith({ name: 'movie', params: { id: 97 } })
    });
})