import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { Outlet, Link } from "react-router";
import crwnLogo from "../../assets/crown.svg";
import "./navigation.styles.scss";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    const response = await signOutUser();
    console.log("Sign Out: ", response);
  };
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={crwnLogo} className="logo" alt="Vite logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
