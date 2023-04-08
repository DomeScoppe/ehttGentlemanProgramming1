import { Stack } from '@mui/material';
import { FiltersContainer, Searcher } from './components';
import SortSelector from './components/SortSelector';

const FilterBarContainer = () => {
  return (
    <Stack width="100%" flexDirection="row" justifyContent="space-between">
      <Searcher />
      <FiltersContainer />
      <SortSelector />
    </Stack>
  );
};

export default FilterBarContainer;
