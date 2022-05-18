import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { Card } from '../Card/card';

describe('Card', () => {
   it('should render the card', () => {
      const characterName = 'character name';
      const portrayedName = 'portrayed name';

      const { getByText } = render(
         <Card image="" characterName={characterName} portrayedName={portrayedName} />,
      );

      const characterElement = getByText(characterName);
      expect(characterElement).toBeInTheDocument();

      const protrayedElement = getByText(portrayedName);
      expect(protrayedElement).toBeInTheDocument();
   });
});
