import { Button, Stack } from '@mui/material';
import { grey } from '@mui/material/colors';

const ModalButton = ({
  onClickFunction,
  description,
  active
}: {
  onClickFunction: () => void;
  description: string;
  active: boolean;
}) => {
  return (
    <Stack
      bgcolor="ghostWhite"
      justifyContent="space-around"
      flexDirection="row"
      borderBottom="1px solid black">
      <Button
        variant={active ? 'contained' : 'outlined'}
        onClick={onClickFunction}
        sx={{
          backgroundColor: active ? grey[400] : 'transparent',
          borderColor: 'gray',
          color: 'black',
          '&:hover': {
            backgroundColor: active ? grey[600] : grey[600]
          }
        }}>
        {description}
      </Button>
    </Stack>
  );
};

export default ModalButton;
