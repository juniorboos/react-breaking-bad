import '@testing-library/jest-dom/extend-expect';

import { render, waitFor } from '@testing-library/react';
import { App } from 'App';
import { characters as mockedCharacters } from 'tests/__mocks__/characters';

describe('useBreakingBad', () => {
   let originFetch: any;
   beforeEach(() => {
      originFetch = (global as any).fetch;
   });
   afterEach(() => {
      (global as any).fetch = originFetch;
   });
   it('should render fetched characters', async () => {
      const mRes = { json: jest.fn().mockResolvedValueOnce(mockedCharacters) };
      const mockedFetch = jest.fn().mockResolvedValueOnce(mRes as any);
      (global as any).fetch = mockedFetch;
      const { getAllByTestId } = render(<App />);
      const cards = await waitFor(() => getAllByTestId('card'));
      expect(cards).toHaveLength(mockedCharacters.length);
   });
});
