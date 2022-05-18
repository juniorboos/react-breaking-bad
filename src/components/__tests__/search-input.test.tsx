import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/react';

import { SearchInput } from '../SearchInput/search-input';

describe('SearchInput', () => {
   const mockedFn = jest.fn();
   it('should trigger on change', () => {
      const { getByTestId } = render(<SearchInput value="" onChange={mockedFn} />);

      const searchInputElement = getByTestId('search-input');
      fireEvent.change(searchInputElement, { target: { value: 'W' } });
      expect(mockedFn).toHaveBeenCalled();
   });
});
