import { Box, Grid } from '@mui/material';
import { Card } from 'components/Card';
import { Character } from 'types/character';

interface CardListProps {
   characters: Character[];
}

const CardList = ({ characters }: CardListProps) => {
   return (
      <Box sx={{ flexGrow: 1 }}>
         <Grid container spacing={2}>
            {characters.map((character) => (
               <Grid item xs={12} sm={6} md={3} xl={2.4} key={character.char_id}>
                  <Card
                     image={character.img}
                     characterName={character.name}
                     portrayedName={character.portrayed}
                  />
               </Grid>
            ))}
         </Grid>
      </Box>
   );
};

export { CardList };
