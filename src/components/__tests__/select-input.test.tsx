import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/react';

import { SelectInput } from '../SelectInput/select-input';

describe('SelectInput', () => {
   const mockedFn = jest.fn();
   it('should trigger on change', () => {
      const { getByTestId } = render(<SelectInput value="" onChange={mockedFn} />);

      const selectInputElement = getByTestId('select-input');
      fireEvent.change(selectInputElement, { target: { value: 'character-desc' } });
      expect(mockedFn).toHaveBeenCalled();
   });
});
