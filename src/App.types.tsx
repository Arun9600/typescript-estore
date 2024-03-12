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
  loading: boolean;
  error: string;
};
export type limitResultsSliceInitialState = {
  datas: [] | null;
  loading: boolean;
  error: string;
};
export type productsDetailsSliceInitialSlice = {
  datas: {} | null;
};
export type productsDetailData = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating?: {
    count?: number | null;
    rate?: number | null;
  };
};

export type cartSliceInitialState = {
  datas: [] | null;
};

export type CartData = {
  id: number;
  title: string;
  price: string | number;
  image: string;
  qty?: number | undefined;
};
