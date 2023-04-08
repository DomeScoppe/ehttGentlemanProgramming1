export interface Person {
  id: string;
  name: string;
  category: Categories;
  company: Company;
  happinessLevel: number;
}

type Categories = 'Employee' | 'Manager';

interface Company {
  name: string;
  logo: string;
}
