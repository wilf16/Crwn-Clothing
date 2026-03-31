import { useSelector, useDispatch } from "react-redux";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { selectCartItems } from "../../store/cart/cart.selector";
import { setCartItems } from "../../store/cart/cart.action";

import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id,
  );
  // If found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
  }
  // return new array with modified cart items/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, imageUrl } = product;

  const addProductToCart = () => {
    const newCartItems = addCartItem(cartItems, product);
    dispatch(setCartItems(newCartItems));
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
