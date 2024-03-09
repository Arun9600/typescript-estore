import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useAppSelector } from "../features/hooks";
const Menu = () => {
  const data = useAppSelector((state) => state.cart.datas);
  return (
    <>
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">
            <AddShoppingCartIcon />
            {data && data.length}
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Menu;
