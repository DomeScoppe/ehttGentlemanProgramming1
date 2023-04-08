import { Stack } from '@mui/material';
import ModalButtonsContainer from './components/ModalButtonsContainer';
import { ModalButton, PersonListContainer, PersonListTable } from './components';
import usePersonListStore from '../../stores/personListStore/personListStore';

const Home = () => {
  const { selectedList, changeList } = usePersonListStore();
  return (
    <Stack width="100%" height="100%" alignItems="center">
      <ModalButtonsContainer>
        <ModalButton
          description="general"
          onClickFunction={() => changeList('generalPersonList')}
          active={selectedList === 'generalPersonList'}
        />
        <ModalButton
          description="favorite"
          onClickFunction={() => changeList('favoritePersonList')}
          active={selectedList === 'favoritePersonList'}
        />
      </ModalButtonsContainer>
      {selectedList && (
        <PersonListContainer>
          <PersonListTable tableType={selectedList} />
        </PersonListContainer>
      )}
    </Stack>
  );
};

export default Home;
