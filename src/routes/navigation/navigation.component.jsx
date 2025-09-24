import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CardDropdown from "../../components/card-dropdown/card-dropdown.component";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { Outlet, Link } from "react-router";

import CrwnLogo from "../../assets/crown.svg";

import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    const response = await signOutUser();
    console.log("Sign Out: ", response);
  };

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={CrwnLogo} className="logo" alt="Vite logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CardDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
