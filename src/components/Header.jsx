import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="t py-2">
      <div className="make-center flex justify-end sm:justify-end">
        <div className="flex gap-x-2 justify-center items-center">
          <Link to="/login" className="btn btn-sm btn-primary">
            Login
          </Link>
          <Link to="/register" className="btn btn-sm btn-primary">
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
