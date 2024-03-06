import { useSelector } from "react-redux";
import { useAppDispatch, AppDispatch, RootState } from "./features/store";
import { useEffect } from "react";
import { getProductsDataInList } from "./features/ProductsListSlice";
const App = () => {
  const dispatch: AppDispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProductsDataInList());
  }, [dispatch]);
  return (
    <>
      <h1>Store App</h1>
    </>
  );
};

export default App;
