import { Stack } from '@mui/material';
import FilterBarContainer from './filterBar/FilterBarContainer';
import { ReactNode } from 'react';

const PersonListContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      width="80%"
      height="80%"
      borderRadius="10px"
      border="1px solid black"
      borderTop="none"
      padding="0 1ren 1rem">
      <FilterBarContainer />
      <Stack sx={{ overflowY: 'scroll' }}>{children}</Stack>
    </Stack>
  );
};

export default PersonListContainer;
