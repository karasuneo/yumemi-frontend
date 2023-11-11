export type TotalPopulation = {
  year: number;
  value: number;
};

export type UnderPopulation = {
  year: number;
  value: number;
  rate: number;
};

export type WorkingAgePopulation = {
  year: number;
  value: number;
  rate: number;
};

export type ElderlyPopulation = {
  year: number;
  value: number;
  rate: number;
};

export type PopulationData = {
  label: string;
  data:
    | TotalPopulation[]
    | UnderPopulation[]
    | WorkingAgePopulation[]
    | ElderlyPopulation[];
};

export type PopulationResult = {
  boundaryYear: number;
  data: PopulationData[];
};

export type PopulationResponse = {
  message: string | null;
  result: PopulationResult;
};

export type PopulationAndPrefName = {
  prefName: string;
  data: PopulationData[];
};

export type PrefectureNameAndPopulationData = {
  prefName: string;
  data: number[];
};

export type PopulationNextResponse = {
  label: string;
  years: number[];
  populationData: PrefectureNameAndPopulationData[];
};

export type PopulationType = 'none' | 'total' | 'under' | 'working' | 'elderly';
