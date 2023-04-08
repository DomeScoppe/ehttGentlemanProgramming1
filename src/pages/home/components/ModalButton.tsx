import { Button, Stack } from '@mui/material';

const ModalButton = ({
  onClickFunction,
  description
}: {
  onClickFunction: () => void;
  description: string;
}) => {
  return (
    <Stack
      bgcolor="ghostWhite"
      justifyContent="space-around"
      flexDirection="row"
      borderBottom="1px solid black">
      <Button
        variant="outlined"
        onClick={onClickFunction}
        sx={{ borderColor: 'gray', color: 'black' }}>
        {description}
      </Button>
    </Stack>
  );
};

export default ModalButton;
