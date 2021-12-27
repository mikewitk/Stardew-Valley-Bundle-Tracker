import { render } from '@testing-library/react';
import React from 'react'
import App from './App';

describe('<App />', () => {
  it('run without errors', () => {
    render(<App />).getByText(/hello world/i)
  })

})
