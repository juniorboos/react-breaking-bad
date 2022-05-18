import {
   FormControl,
   InputLabel,
   MenuItem,
   Select,
   SelectChangeEvent,
} from '@mui/material';

interface SelectInputProps {
   value: string;
   // eslint-disable-next-line no-unused-vars
   onChange: (e: SelectChangeEvent) => void;
}

const SelectInput = ({ value, onChange }: SelectInputProps) => {
   return (
      <FormControl>
         <InputLabel id="filter-select-label">Filter</InputLabel>
         <Select
            labelId="filter-select-label"
            id="filter-select"
            value={value}
            label="Age"
            onChange={onChange}
            sx={{ minWidth: 240 }}
            inputProps={{ 'data-testid': 'select-input' }}
         >
            <MenuItem value={'character-asc'}>Character name ascending</MenuItem>
            <MenuItem value={'character-desc'}>Character name descending</MenuItem>
            <MenuItem value={'actor-asc'}>Actor name ascending</MenuItem>
            <MenuItem value={'actor-desc'}>Actor name descending</MenuItem>
         </Select>
      </FormControl>
   );
};

export { SelectInput };
