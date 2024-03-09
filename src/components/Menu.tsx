import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const Menu = () => {
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
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Menu;
