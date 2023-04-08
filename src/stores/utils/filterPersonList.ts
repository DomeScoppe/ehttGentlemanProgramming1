import { Person } from '../../models';
import { personListExample } from '../../utils/person-example';

const filterPersonList = (searchValue: string): Person[] => {
  const escapedSearchValue = searchValue?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(escapedSearchValue, 'i');

  return personListExample.filter(
    (person) =>
      regex.test(person.name) || regex.test(person.company.name) || regex.test(person.category)
  );
};
export default filterPersonList;
