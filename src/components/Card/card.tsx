import {
   Card as MuiCard,
   CardActionArea,
   CardContent,
   CardMedia,
   Typography,
} from '@mui/material';

interface CardProps {
   image: string;
   characterName: string;
   portrayedName: string;
}

const Card = ({ image, characterName, portrayedName }: CardProps) => {
   return (
      <MuiCard data-testid="card">
         <CardActionArea>
            <CardMedia
               component="img"
               height="600"
               image={image}
               alt={`${characterName} picture`}
            />
            <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                  {characterName}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  {portrayedName}
               </Typography>
            </CardContent>
         </CardActionArea>
      </MuiCard>
   );
};

export { Card };
