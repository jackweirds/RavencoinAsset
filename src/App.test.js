// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RavencoinAsset title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RavencoinAsset/i);
    expect(titleElement).toBeInTheDocument();
});
