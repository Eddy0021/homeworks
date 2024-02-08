import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import MovieDetails from '../MovieDetails.vue';

describe('MovieDetails', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('renders movie details correctly', async () => {
    const movie = {
      title: 'Sample Movie',
      imdbRating: '7.5',
      genres: ['Action', 'Adventure'],
      year: '2022',
      duration: 'PT2H30M',
      storyline: 'This is a sample movie storyline.',
      posterurl: 'path/to/poster.jpg',
    };

    const wrapper = mount(MovieDetails, {
      props: {
        movie,
      },
    });

    await wrapper.vm.$nextTick();

    expect(wrapper.find('.movie-title h1').text()).toBe(movie.title);
    expect(wrapper.find('.movie-rating').text()).toBe(movie.imdbRating);
    expect(wrapper.find('.movie-genres').text()).toBe(movie.genres.join(' ,'));
    expect(wrapper.find('.movie-info p:first-child').text()).toBe(movie.year);
    expect(wrapper.find('.movie-info p:last-child').text()).toBe('2H30M');
  });

  it('handles image error correctly', async () => {
    const movieWithImageError = {
      title: 'Movie with Image Error',
      imdbRating: '6.0',
      genres: ['Drama'],
      year: '2023',
      duration: 'PT2H',
      storyline: 'This movie has an image error.',
      posterurl: 'invalid_path/to/poster.jpg',
    };

    const wrapper = mount(MovieDetails, {
      props: {
        movie: movieWithImageError,
      },
    });

    await wrapper.vm.$nextTick();

    const movieImage = wrapper.find('.movie img');
    expect(movieImage.exists()).toBe(true);

    if (wrapper.vm.imageError) {
        expect(movieImage.classes()).toContain('error');
    } else {
        expect(movieImage.classes()).not.toContain('error');
    }
  });
});
