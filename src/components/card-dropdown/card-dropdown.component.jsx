import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";
import {
  CarDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./card-dropdown.styles";

const CardDropdown = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const goToCheckoutHandler = () => {
    navigate("checkout");
    dispatch(setIsCartOpen(false));
  };

  return (
    <CarDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CarDropdownContainer>
  );
};

export default CardDropdown;
