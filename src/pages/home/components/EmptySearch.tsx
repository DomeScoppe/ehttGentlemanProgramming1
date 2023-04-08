import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { Stack, Typography } from '@mui/material';

const EmptySearch = () => {
  return (
    <Stack direction="column" alignItems="center" gap="2rem" paddingTop="5rem">
      <InfoRoundedIcon fontSize="large" />
      <Typography variant="h6" fontWeight={700}>
        No hay resultados para tu búsqueda
      </Typography>
    </Stack>
  );
};

export default EmptySearch;
