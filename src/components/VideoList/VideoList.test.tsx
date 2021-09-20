import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoList from './VideoList';

const VIDEO_LIST = [{
    "id": 501437,
    "artist": "Pants Velour",
    "title": "All In",
    "release_year": 2014,
    "genre_id": 14,
    "image_url": "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/501437/images/app/w522_h292.jpg"
},
{
    "id": 501649,
    "artist": "El Koala",
    "title": "Veni paca to",
    "release_year": 2014,
    "genre_id": 8,
    "image_url": "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/501649/images/app/w522_h292.jpg"
}];

test('Render Video list component with video list', () => {
    render(<VideoList allVideos={VIDEO_LIST} />);
    const updatedLink = screen.getByText(/El Koala/i);
    expect(updatedLink).toBeInTheDocument();
});


test('Render video list component with empty video list', () => {
    render(<VideoList allVideos={[]} />);
    const linkElement = screen.getByText(/No result found, try with something else/i);
    expect(linkElement).toBeInTheDocument();
});

