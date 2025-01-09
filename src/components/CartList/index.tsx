import Styles from "./CartList.module.css";
import Typography from "../Typography";
import { Product } from "../../common/types/product";
import CartItem from "../CartItem";
import CartEmptyMessage from "../CartEmptyMessage";

type Props = {
    onRemove: (id: number) => void;
  cartItems: Product[];
};

const CartList = ({ onRemove, cartItems }: Props) => {
  return (
    <div className={Styles.cartItems}>
      <Typography
        variantStyle="body-large-bold"
        className={Styles.cartItemTitle}
      >
        Detalhes da compra
      </Typography>
      {cartItems?.length > 0 ? (
        cartItems.map((item) => (
          <CartItem item={item} removeFromCart={onRemove} />
        ))
      ) : (
        <CartEmptyMessage />
      )}
    </div>
  );
};

export default CartList;
