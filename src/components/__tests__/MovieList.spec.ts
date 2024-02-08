import { createPinia, setActivePinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
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
    
      it('emits "selectedMovie" event when a movie card is clicked', async () => {
        const wrapper = mount(MovieList);
    
        await wrapper.vm.$nextTick();
    
        const movieCard = wrapper.findComponent({ name: 'MovieCard' });
        await movieCard.trigger('click');
    
        await wrapper.vm.$nextTick();
    
        const emittedEvent: any = wrapper.emitted('selectedMovie');

        expect(emittedEvent).toBeTruthy();

        if (emittedEvent) {
            const emittedData = emittedEvent[0][0].id;
            expect(emittedData).toEqual(97);
        }
    });
})