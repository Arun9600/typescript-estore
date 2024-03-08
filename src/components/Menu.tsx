import { Link } from "react-router-dom";
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
      </ul>
    </>
  );
};

export default Menu;
