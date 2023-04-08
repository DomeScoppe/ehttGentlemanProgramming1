import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { FilterOptions, FilterOption } from '../../../../../../models';
import optionsInSelector from '../../../../../../utils/optionsInSelector';
import usePersonListStore from '../../../../../../stores/personListStore/personListStore';

const FilterSelector = ({ option }: { option: FilterOption }) => {
  const { filterOptions, filterByOption } = usePersonListStore();
  return (
    <FormControl>
      <InputLabel id={option}>{option}</InputLabel>
      <Select
        value={filterOptions[option]}
        labelId={option}
        label={option}
        onChange={(e) =>
          filterByOption(option, e.target.value as FilterOptions[keyof FilterOptions])
        }>
        {optionsInSelector[option].map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterSelector;
