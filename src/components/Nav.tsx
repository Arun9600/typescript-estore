import { Outlet } from "react-router-dom";
import TopArea from "./TopArea";
import Footer from "./Footer";
const Nav = () => {
  return (
    <>
      <TopArea />
      <Outlet />
      <Footer />
    </>
  );
};

export default Nav;
