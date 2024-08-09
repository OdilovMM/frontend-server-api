import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";
import { logOut } from "../features/user/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userState.user);

  const handleLogout = () => {
    navigate("/");
    dispatch(clearCart());
    dispatch(logOut());
  };

  return (
    <header className="t py-2">
      <div className="make-center flex justify-end sm:justify-end">
        <div className="flex gap-x-2 justify-center items-center">
          {user ? (
            <div className="flex gap-x-2 sm:gap-x-8 items-center">
              <p>Hello, {user.name}</p>
              <button onClick={handleLogout} className="btn btn-sm btn-secondary">
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-row gap-2">
              <Link to="/login" className="btn btn-sm btn-secondary">
                Login
              </Link>
              <Link to="/register" className="btn btn-sm btn-secondary">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
