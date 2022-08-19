import Item from "./Item";
import Customer from "./Customer";
class Cart {
  id = "";
  cust = new Customer();
  item = [new Item()];
}

export default Cart;
