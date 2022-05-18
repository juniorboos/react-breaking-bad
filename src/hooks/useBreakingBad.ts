import { useEffect, useState } from 'react';
import { Character } from 'types/character';
import { sortString } from 'utils/sortString';

type FilterSufix = 'asc' | 'desc';

const useBreakingBad = (name: string, type: string) => {
   const [characters, setCharacters] = useState<Character[]>([]);

   const fetchCharacters = async (name?: string) => {
      const BASE_URL = process.env.REACT_APP_API_BASE_URL;
      const filterName = name ? name : '';

      fetch(`${BASE_URL}?name=${filterName}`)
         .then((response) => response.json())
         .then((data) => setCharacters(data));
   };

   const filterBy = (type: string) => {
      const [typePrefix, typeSufix] = type.split('-');
      const characterList = [...characters];

      switch (typePrefix) {
         case 'character':
            setCharacters(
               characterList.sort((a, b) =>
                  sortString(a.name, b.name, typeSufix as FilterSufix),
               ),
            );
            break;
         case 'actor':
            setCharacters(
               characterList.sort((a, b) =>
                  sortString(a.portrayed, b.portrayed, typeSufix as FilterSufix),
               ),
            );
            break;

         default:
            break;
      }
   };

   useEffect(() => {
      fetchCharacters(name);
   }, [name]);

   useEffect(() => {
      filterBy(type);
   }, [type]);

   return { characters };
};

export { useBreakingBad };
