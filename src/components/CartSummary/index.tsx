import Typography from "../Typography";
import Field from "../Field";
import Divider from "../Divider";
import { ShoppingBagIcon } from "../../common/icons/ShoppingBagIcon";
import Button from "../Button";
import Styles from './CartSummary.module.css'
import { Product } from "../../common/types/product";

type Props = {
    cartItems: Product[];
    total: number;
    freight: number;
    handleRedirect: () => void;
};

const CartSumarry = ({ cartItems, total, freight, handleRedirect}: Props) => {
  return (
    <div className={Styles.cartSummary}>
      <Typography variantStyle="heading-small">Sumário</Typography>
      <div className={Styles.discount}>
        <Field
          label="Cupom de desconto"
          inputId="cupom"
          inputPlaceholder="Digite o cupom"
          buttonText="Ok"
          onButtonClick={() => {}}
          onChange={() => {}}
        />
      </div>
      <div className={Styles.summaryResume}>
        <Typography variantStyle="body-small-bold">
          {cartItems.length} Produtos
        </Typography>
        <Typography variantStyle="body-small-bold">R$ {total}</Typography>
        <Typography variantStyle="body-small-bold">Frete:</Typography>
        <Typography variantStyle="body-small-bold">R$ {freight}</Typography>
      </div>
      <Divider style={{ borderColor: "#780BF7" }} />
      <div className={Styles.total}>
        <Typography variantStyle="body-large-bold">
          <ShoppingBagIcon />
          <span style={{ marginLeft: "4px" }}>Total:</span>
        </Typography>
        <Typography variantStyle="body-large-bold" className={Styles.total}>
          R$ {total + freight}
        </Typography>
      </div>
      <div className={Styles.cartActions}>
        <Button onClick={handleRedirect} variant="secondary">
          Continuar comprando
        </Button>
        <Button onClick={() => console.log("pagamento")}>
          Ir para pagamento
        </Button>
      </div>
    </div>
  );
};

export default CartSumarry;
