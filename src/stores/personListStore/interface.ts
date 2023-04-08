import { FilterOptions, SelectedListOrEmpty } from '../../models';
import { Person } from '../../models';
import { SortOption } from '../../models/personListSortOptions';

export interface PersonListStore {
  selectedList: SelectedListOrEmpty;
  generalPersonList: Person[];
  personListInCache: Person[];
  favoritePersonListSaved: Person[];
  searchValue: string;
  filterOptions: FilterOptions;
  sortOption: SortOption;
  favoritePersonList: Person[];
  filterByOption: (option: keyof FilterOptions, value: number) => void;
  sortPersonList: (sortOption: SortOption) => void;
  setSearch: (search: string) => void;
  setPersonList: (generalPersonList: Person[]) => void;
  setPersonListWithRules: (generalPersonList: Person[]) => void;
  addToFavoriteList: (id: string) => void;
  removeFromFavoriteList: (id: string) => void;
  changeList: (list: SelectedListOrEmpty) => void;
}
