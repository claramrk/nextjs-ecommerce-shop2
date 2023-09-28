export default function CartPage() {
  return (
    <div className="cartpage">
      <h1 className="cart">Cart</h1>

      <button className="itemsinCart"> </button>

      <div className="ProductCard">
        <div className="title">Product Name</div>

        <p className="subtitle">{`Quantity: `}</p>
        <div className="subtotalP1">Subtotal:</div>
        <h2>Total Price:</h2>
        <p>0</p>
        <button className="buttonSecondary">Remove</button>
      </div>

      <div className="totalpriceandquantity">
        <h2>Total Price:</h2>
        <p>0</p>
        <div className="quantity">{`Quantity: `}</div>
        <button className="buttonSecondary">Checkout!</button>
      </div>
    </div>
  );
}
