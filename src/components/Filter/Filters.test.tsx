
import { render, screen } from "@testing-library/react";
import Filters from './Filters';
import { GENRE_LIST } from "../GenreFilter/GenreFilter.test";

test("Filter Component test", async () => {

    render(<Filters
        yearList={[2000, 2001]}
        onYearSelect={() => { }}
        selectedYear={2000}
        genreList={GENRE_LIST}
        selectedGenre={[5, 13]}
    />);

    const linkElement = await screen.findAllByText(/Genre/i);
    expect(linkElement.length).toBeGreaterThan(0);
    const popGenreElement = await screen.findAllByText(/Pop/i);
    const countryGenreElement = await screen.findAllByText(/Country/i);
    expect(popGenreElement).toBeTruthy();
    expect(countryGenreElement).toBeTruthy();

    const yearElement = await screen.findAllByText(/Year/i);
    expect(yearElement.length).toBeGreaterThan(0);

    const selectedYear = await screen.findAllByText(/2000/i);
    expect(selectedYear).toBeTruthy();
    
});