import { IconButton, Stack, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { SelectedList } from '../../../../../models';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import usePersonListStore from '../../../../../stores/personListStore/personListStore';
import EmptySearch from '../../EmptySearch';

const PersonListTable = ({ tableType }: { tableType: SelectedList }) => {
  const { generalPersonList, favoritePersonList, addToFavoriteList, removeFromFavoriteList } =
    usePersonListStore();
  const listSelected = {
    generalPersonList: generalPersonList,
    favoritePersonList: favoritePersonList
  };
  if (!listSelected[tableType]?.length) return <EmptySearch />;
  return (
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell style={{ textAlign: 'center' }}>Name</TableCell>
          <TableCell style={{ textAlign: 'center' }}>Category</TableCell>
          <TableCell style={{ textAlign: 'center' }}>Company</TableCell>
          <TableCell style={{ textAlign: 'center' }}>Company logo</TableCell>
          <TableCell style={{ textAlign: 'center' }}>Happiness Level</TableCell>
          <TableCell style={{ textAlign: 'center' }}>
            {tableType === 'generalPersonList'
              ? 'Agregar a favoritos'
              : tableType === 'favoritePersonList'
              ? 'Eliminar de favoritos'
              : ''}
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {listSelected[tableType].map((person) => (
          <TableRow key={person.id}>
            <TableCell style={{ textAlign: 'center', width: '20%' }}>{person.name}</TableCell>
            <TableCell style={{ textAlign: 'center', width: '20%' }}>{person.category}</TableCell>
            <TableCell style={{ textAlign: 'center', width: '20%' }}>
              {person.company.name}
            </TableCell>
            <TableCell style={{ textAlign: 'center', width: '20%' }}>
              <Stack alignItems="center" justifyContent="center">
                <img
                  src={person.company.logo}
                  alt={person.company.name}
                  style={{ width: '64px', height: '32px' }}
                />
              </Stack>
            </TableCell>
            <TableCell style={{ textAlign: 'center', width: '10%' }}>
              {person.happinessLevel}
            </TableCell>
            <TableCell style={{ textAlign: 'center', width: '10%' }}>
              {tableType === 'generalPersonList' ? (
                <IconButton onClick={() => addToFavoriteList(person.id)}>
                  <AddIcon />
                </IconButton>
              ) : tableType === 'favoritePersonList' ? (
                <IconButton onClick={() => removeFromFavoriteList(person.id)}>
                  <RemoveIcon />
                </IconButton>
              ) : (
                <div />
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PersonListTable;
