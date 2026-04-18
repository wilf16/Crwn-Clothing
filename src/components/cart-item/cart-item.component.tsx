import type { CartItem as CartItemType } from "../../store/cart/cart.types";
import { CartItemContainer, ItemDetails, ItemDetail } from "./cart-item.styles";

type CartItemProps = {
  cartItem: CartItemType;
};
const CartItem = ({ cartItem }: CartItemProps) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <ItemDetail>{name}</ItemDetail>
        <ItemDetail>
          {quantity} x ${price}
        </ItemDetail>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
