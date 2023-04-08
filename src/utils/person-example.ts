import { Person } from '../models/person/person.model';
import { v4 as uuid } from 'uuid';

export const personListExample: Person[] = [
  {
    id: uuid(),
    name: 'John',
    category: 'Employee',
    company: {
      name: 'Google',
      logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
    },
    happinessLevel: 5
  },
  {
    id: uuid(),
    name: 'Jane',
    category: 'Manager',
    company: {
      name: 'Google',
      logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
    },
    happinessLevel: 2
  },
  {
    id: uuid(),
    name: 'Bob',
    category: 'Employee',
    company: {
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg'
    },
    happinessLevel: 2
  },
  {
    id: uuid(),
    name: 'Alice',
    category: 'Manager',
    company: {
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg'
    },
    happinessLevel: 5
  },
  {
    id: uuid(),
    name: 'Jack',
    category: 'Employee',
    company: {
      name: 'Google',
      logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
    },
    happinessLevel: 5
  },
  {
    id: uuid(),
    name: 'Wilson',
    category: 'Manager',
    company: {
      name: 'Google',
      logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
    },
    happinessLevel: 2
  },
  {
    id: uuid(),
    name: 'Jill',
    category: 'Employee',
    company: {
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg'
    },
    happinessLevel: 1
  }
];
