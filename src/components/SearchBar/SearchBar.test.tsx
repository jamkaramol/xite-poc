import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

test('Search bar component', async () => {

    let searchString = "test video string";
    const setSearchStringToState = (e: any) => {
        expect(e.target.value).toEqual("test video string")
    }

    render(<SearchBar searchVideoByInput={setSearchStringToState}
        searchString={searchString} />);
    const linkElement = await screen.getAllByText(/Search by artist or title/i);
    expect(linkElement.length).toBeGreaterThan(0);
});

test('Search bar component with empty string', async () => {

    const searchString = "test";
    const setSearchStringToState = (e: any) => { }

    const searchBar = render(<SearchBar searchVideoByInput={setSearchStringToState}
        searchString={searchString} />);
    const linkElement = await searchBar.container.querySelector("#fullWidth");
    expect(linkElement).toBeTruthy();
});

