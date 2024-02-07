import { createPinia, setActivePinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils';
import MovieCard from '../MovieCard.vue';

describe('MovieCard', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('renders movie card correctly', async () => {
    const movie = {
      title: 'Sample Movie',
      imdbRating: '7.5',
      genres: ['Action', 'Adventure'],
      year: '2022',
      storyline: 'This is a sample movie storyline.',
      posterurl: 'path/to/poster.jpg',
    };

    const wrapper = mount(MovieCard, {
      props: {
        movie,
      },
    });

    await wrapper.vm.$nextTick();

    expect(wrapper.find('.movie-title h3').text()).toBe(movie.title);
    expect(wrapper.find('.movie-title p').text()).toBe(movie.genres.join(', '));
    expect(wrapper.find('.movie-release-date').text()).toBe(movie.year);
  });

  it('handles image error correctly', async () => {
    const movieWithImageError = {
      title: 'Movie with Image Error',
      imdbRating: '6.0',
      genres: ['Drama'],
      year: '2023',
      storyline: 'This movie has an image error.',
      posterurl: 'invalid_path/to/poster.jpg',
    };

    const wrapper = mount(MovieCard, {
      props: {
        movie: movieWithImageError,
      },
    });

    await wrapper.vm.$nextTick();

    const movieImage = wrapper.find('.movie-card img');

    expect(movieImage.exists()).toBe(true);

    if (wrapper.vm.imageError) {
      expect(movieImage.classes()).toContain('error');
    } else {
      expect(movieImage.classes()).not.toContain('error');
    }
  });
});
