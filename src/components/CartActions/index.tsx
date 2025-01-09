import Button from "../Button";
import Styles from "./CartActions.module.css";

type Props = {
  handleRedirect: () => void;
};

const CartActions = ({ handleRedirect }: Props) => {
  return (
    <div className={Styles.cartActions}>
      <Button onClick={handleRedirect} variant="secondary">
        Continuar comprando
      </Button>
      <Button onClick={() => console.log("pagamento")}>
        Ir para pagamento
      </Button>
    </div>
  );
};

export default CartActions;
