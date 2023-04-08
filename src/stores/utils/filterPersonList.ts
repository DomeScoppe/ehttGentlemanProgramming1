import { Person } from '../../models';
import { personListExample } from '../../utils/person-example';

const filterPersonList = (searchValue: string): Person[] => {
  const lowerCaseSearchValue = searchValue.toLowerCase();

  return personListExample.filter(
    (person) =>
      person.name.toLowerCase().includes(lowerCaseSearchValue) ||
      person.company.name.toLowerCase().includes(lowerCaseSearchValue) ||
      person.category.toLowerCase().includes(lowerCaseSearchValue)
  );
};
export default filterPersonList;
