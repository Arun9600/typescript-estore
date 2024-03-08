export type productsListDatas = {
  id: number;
  title: string;
  price: string;
  category: string;
  image: string;
};

export type productsSliceInitialState = {
  datas: [] | null;
};

export type productsCatergoriesSliceInitialState = {
  datas: [] | null;
};

export type limitResultsSliceInitialState = {
  datas: [] | null;
};
