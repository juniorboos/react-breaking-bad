import { InputAdornment, TextField } from '@material-ui/core';
import { Search } from '@mui/icons-material';
import React from 'react';

interface SearchInputProps {
   value: string;
   // eslint-disable-next-line no-unused-vars
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ value, onChange }: SearchInputProps) => {
   return (
      <TextField
         id="search-input"
         inputProps={{ 'data-testid': 'search-input' }}
         label="Search"
         InputProps={{
            startAdornment: (
               <InputAdornment position="start">
                  <Search />
               </InputAdornment>
            ),
         }}
         variant="outlined"
         onChange={onChange}
         value={value}
      />
   );
};

export { SearchInput };
