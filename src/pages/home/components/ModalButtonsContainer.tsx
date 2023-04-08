import { Stack } from '@mui/material';
import { ReactNode } from 'react';

const ModalButtonsContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Stack width="10%" justifyContent="center" flexDirection="row">
      {children}
    </Stack>
  );
};

export default ModalButtonsContainer;
