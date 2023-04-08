import { create } from 'zustand';
import { PersonListStore } from './interface';
import { Person } from '../../models/person/person.model';
import { FilterOptions, SelectedListOrEmpty } from '../../models';
import filterPersonList from '../utils/filterPersonList';
import { SortOption } from '../../models/personListSortOptions';
import personListDictionary from '../utils/personListDictionary';

const usePersonListStore = create<PersonListStore>((set, get) => {
  const applyRules = () => {
    const state = get();

    const filterFunctions: Record<keyof FilterOptions, (person: Person) => boolean> = {
      happinessLevel: (person) => person.happinessLevel >= state.filterOptions.happinessLevel
    };

    if (!state.selectedList) return;
    const personListSelected = personListDictionary[state.selectedList];
    const personList = state[personListSelected].filter((person) =>
      Object.keys(state.filterOptions).every((option) =>
        filterFunctions[option as keyof FilterOptions](person)
      )
    );

    const sortFunctions: Record<SortOption, (a: Person, b: Person) => number> = {
      happinessLevelAscending: (a, b) => a.happinessLevel - b.happinessLevel,
      happinessLevelDescending: (a, b) => b.happinessLevel - a.happinessLevel,
      categoryAscending: (a, b) => b.category.localeCompare(a.category),
      categoryDescending: (a, b) => a.category.localeCompare(b.category),
      companyNameAscending: (a, b) => b.company.name.localeCompare(a.company.name),
      companyNameDescending: (a, b) => a.company.name.localeCompare(b.company.name),
      nameAscending: (a, b) => b.name.localeCompare(a.name),
      nameDescending: (a, b) => a.name.localeCompare(b.name)
    };

    personList.sort(sortFunctions[state.sortOption]);
    set((prevState) => ({
      ...prevState,
      [state.selectedList]: personList
    }));
  };

  return {
    generalPersonList: [],
    personListInCache: [],
    favoritePersonList: [],
    favoritePersonListSaved: [],
    searchValue: '',
    filterOptions: {
      happinessLevel: 0
    },
    selectedList: '',
    sortOption: 'nameDescending',
    filterByOption: <T extends keyof FilterOptions>(option: T, value: FilterOptions[T]) => {
      set((state) => ({
        filterOptions: {
          ...state.filterOptions,
          [option]: value
        }
      }));

      applyRules();
    },
    sortPersonList: (sortOption: SortOption) => {
      set({ sortOption });
      applyRules();
    },
    setSearch: async (searchValue: string) => {
      set({ searchValue });
      const generalPersonList = filterPersonList(searchValue); // Api call

      set({ personListInCache: generalPersonList });

      applyRules();
    },
    addToFavoriteList: (id: string) =>
      set((state) => {
        const personToFavoriteList = state.generalPersonList.find((person) => person.id === id);
        if (state.favoritePersonListSaved.some((person) => person.id === id)) return state;

        if (personToFavoriteList) {
          return {
            favoritePersonList: [...state.favoritePersonList, personToFavoriteList],
            favoritePersonListSaved: [...state.favoritePersonList, personToFavoriteList]
          };
        }
        return state;
      }),
    removeFromFavoriteList: (id: string) =>
      set((state) => ({
        favoritePersonList: state.favoritePersonList.filter((person) => !(person.id === id)),
        favoritePersonListSaved: state.favoritePersonList.filter((person) => !(person.id === id))
      })),
    setPersonList: (generalPersonList: Person[]) =>
      set(() => ({
        generalPersonList,
        personListInCache: generalPersonList
      })),
    setPersonListWithRules: () => {
      applyRules();
    },
    changeList: (list: SelectedListOrEmpty) => {
      set(() => ({
        selectedList: list
      }));
      applyRules();
    }
  };
});

export default usePersonListStore;
