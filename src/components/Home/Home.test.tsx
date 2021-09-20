import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('Home page component', async () => {
    render(<Home />);
    const linkElement = await screen.findByText(/Video Search/i);    
    expect(linkElement).toBeTruthy();

    const clearSearchElement = await screen.findByText(/Clear/i); 
    clearSearchElement.click();
    expect(clearSearchElement).toBeTruthy();

});
