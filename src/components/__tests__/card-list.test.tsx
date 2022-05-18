import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { characters as mockedCharacters } from 'tests/__mocks__/characters';

import { CardList } from '../CardList/card-list';

describe('CardList', () => {
   it('should render all cards', () => {
      const { getAllByTestId } = render(<CardList characters={mockedCharacters} />);

      const cardElements = getAllByTestId('card');
      expect(cardElements).toHaveLength(mockedCharacters.length);
   });
});
