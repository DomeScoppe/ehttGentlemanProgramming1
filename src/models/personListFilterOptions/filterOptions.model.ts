export interface FilterOptions {
  happinessLevel: number;
}

export type FilterValues = {
  [key in keyof FilterOptions]: FilterOptions[key];
};

export interface FilterOptionsInSelectors {
  happinessLevel: number[];
}

export type FilterOption = 'happinessLevel';
