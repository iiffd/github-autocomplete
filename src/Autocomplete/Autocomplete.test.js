import React from 'react';
import { render } from '@testing-library/react';
import Autocomplete from './Autocomplete';

test('renders Autocomplete', () => {
  const comp = render(<Autocomplete />);
  expect(comp).toMatchSnapshot();
});
