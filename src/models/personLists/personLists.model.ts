export type PersonLists =
  | 'generalPersonList'
  | 'favoritePersonList'
  | 'personListInCache'
  | 'favoritePersonListSaved';

export type PersonListDictionary = {
  [key in PersonLists]: PersonLists;
};
