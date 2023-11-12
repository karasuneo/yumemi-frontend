export const POPULATION_TYPE: { [key: string]: string } = {
  none: '',
  total: '総人口',
  under: '年少人口',
  working: '生産年齢人口',
  elderly: '老年人口',
};

export const POPULATION_TYPE_NUM: { [key: string]: number } = {
  total: 0,
  under: 1,
  working: 2,
  elderly: 3,
};
