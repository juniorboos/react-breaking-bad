import { createTheme } from '@material-ui/core/styles';
import { Grid, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { CardList } from 'components/CardList';
import { SearchInput } from 'components/SearchInput';
import { SelectInput } from 'components/SelectInput';
import { useBreakingBad } from 'hooks/useBreakingBad';
import borealisMaterialUiTheme from 'poc-material-ui-theme';
import { useState } from 'react';

const muiTheme = createTheme(borealisMaterialUiTheme);

export const App = () => {
   const [filterName, setFilterName] = useState('');
   const [filterType, setFilterType] = useState('');
   const { characters } = useBreakingBad(filterName, filterType);

   return (
      <>
         <Grid container flexDirection="row" spacing={2}>
            <Grid container item spacing={2} marginTop={0}>
               <Grid item>
                  <SearchInput
                     value={filterName}
                     onChange={(e) => setFilterName(e.target.value)}
                  />
               </Grid>
               <Grid item>
                  <SelectInput
                     value={filterType}
                     onChange={(e) => setFilterType(e.target.value)}
                  />
               </Grid>
            </Grid>
            <Grid container item>
               <MuiThemeProvider theme={muiTheme}>
                  <CardList characters={characters} />
               </MuiThemeProvider>
            </Grid>
         </Grid>
      </>
   );
};
