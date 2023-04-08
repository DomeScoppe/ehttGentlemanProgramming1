import { MenuItem, Select, Stack } from '@mui/material';
import usePersonListStore from '../../../../../stores/personListStore/personListStore';
import { FilterSelector } from './filterSelector';
import { FilterOptions } from '../../../../../models';

const FiltersContainer = () => {
  const { filterOptions } = usePersonListStore();
  return (
    <Stack flex="1.5">
      {Object.keys(filterOptions).map((optionElement, index) => (
        <FilterSelector key={index} option={optionElement as keyof FilterOptions} />
      ))}
    </Stack>
  );
};

export default FiltersContainer;
