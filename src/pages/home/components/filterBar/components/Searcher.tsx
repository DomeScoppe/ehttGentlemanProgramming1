import { Select, Stack, TextField } from '@mui/material';
import usePersonListStore from '../../../../../stores/personListStore/personListStore';

const Searcher = () => {
  const { setSearch, searchValue } = usePersonListStore();
  return (
    <Stack flex="6">
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        placeholder="Type something"
        variant="filled"
        value={searchValue}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          inputProps: {
            style: { textAlign: 'center' }
          }
        }}
      />
    </Stack>
  );
};

export default Searcher;
