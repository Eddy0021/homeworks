import { createPinia, setActivePinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils';
import Banner from '../Banner.vue';
import { useSearchStore } from '../../stores/searchStore'
 
describe('Banner', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  })

  it('renders properly', () => {
    const wrapper = mount(Banner);
    expect(wrapper.exists()).toBe(true);
  });

  it('calls search method when Enter key is pressed', async () => {
    const wrapper = mount(Banner);
    const store = useSearchStore();

    await wrapper.get('input').setValue("Interstellar");
    await wrapper.get('input').trigger('keydown.enter');

    expect(store.getSearchQuery).toBe("Interstellar");
  });

  it('calls search method when SEARCH button is clicked', async () => {
    const wrapper = mount(Banner);
    const store = useSearchStore();

    await wrapper.get('input').setValue("Interstellar");
    await wrapper.find('.search__field').get('button').trigger('click');

    expect(store.getSearchQuery).toBe("Interstellar");
  });

  it('calls setSearchBy method when TITLE button is clicked', async () => {
    const wrapper = mount(Banner);
    const store = useSearchStore();

    await wrapper.find('.search-by').findAll('button')[0].trigger('click');

    expect(store.getSearchBy).toBe("title");
  });

  it('calls setSearchBy method when GENRE button is clicked', async () => {
    const wrapper = mount(Banner);

    const store = useSearchStore();

    await wrapper.find('.search-by').findAll('button')[1].trigger('click');

    expect(store.getSearchBy).toBe("genre");
  });
});
