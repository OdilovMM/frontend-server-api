import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../components";

const HomeLayout = () => {
  return (
    <>
      <nav>
        <Header />
        <Navbar />
      </nav>
      <section className="make-center py-24">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
