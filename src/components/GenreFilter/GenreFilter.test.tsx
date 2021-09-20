import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import GenreFilter from './GenreFilter';

export const GENRE_LIST = [
    { "id": 5, "name": "Pop" },
    { "id": 6, "name": "Electronic/Dance" },
    { "id": 8, "name": "Rock" },
    { "id": 13, "name": "Country" },
    { "id": 14, "name": "Rap/Hip-Hop" }];

test('Genre filter component', async () => {
    render(<GenreFilter genreList={[]} selectedGenre={[]} setSelectedGenreToState={() => { }} />);
    const linkElement = await screen.findAllByText(/Genre/i);
    expect(linkElement.length).toBeGreaterThan(0);
});


test('Genre filter component with genre ids', async () => {
    render(<GenreFilter genreList={GENRE_LIST} selectedGenre={[5, 6, 13]} setSelectedGenreToState={() => { }} />);
    const popGenreElement = await screen.findAllByText(/Pop/i);
    const countryGenreElement = await screen.findAllByText(/Country/i); 
    expect(popGenreElement).toBeTruthy();
    expect(countryGenreElement).toBeTruthy();

});
