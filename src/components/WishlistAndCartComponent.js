import { useState } from "react";

export default function WishlistAndCartComponent({
  bagsList,
  clickedNav,
  onAddToWishlist,
  cartArr,
  isWishOrCart,
}) {
  const wishlistArr = bagsList.filter((bag) => bag.liked);

  return (
    <section className={`wc-comp-stn ${isWishOrCart && "show"}`}>
      <div className="container">
        {clickedNav === "wishlist" && (
          <WishlistComponent
            wishlistArr={wishlistArr}
            onAddToWishlist={onAddToWishlist}
            clickedNav={clickedNav}
          />
        )}
        {clickedNav === "cart" && <CartComponent cartArr={cartArr} clickedNav={clickedNav} />}
      </div>
    </section>
  );
}

function Bar() {
  return (
    <div className="bar">
      <div className="bar-2"></div>
    </div>
  );
}

function ItemAmount({ decrease, increase, amount }) {
  return (
    <div className="amount">
      <button onClick={decrease}>-</button>
      <input type="text" disabled value={amount} />
      <button onClick={increase}>+</button>
    </div>
  );
}

function ItemComponent({ item, clickedNav, onAddToWishlist }) {
  const [amount, setAmount] = useState(1);

  function decrease() {
    if (amount === 1) return;
    setAmount((a) => a - 1);
  }

  function increase() {
    setAmount((a) => a + 1);
  }

  return (
    <div className="item-component" key={item.id}>
      <div className="left">
        <div className="img-holder">
          <img src={item.img} alt={item.name} />
        </div>
        {clickedNav === "cart" && (
          <ItemAmount decrease={decrease} increase={increase} amount={amount} />
        )}
      </div>

      <div className="right">
        <h2>{item.name}</h2>
        <h4>
          Wallet with chain
          <p>Style #36252 0YK0G 1000</p>
        </h4>

        {clickedNav === "cart" ? (
          <h3 className="price">${item.price * amount}</h3>
        ) : (
          <button onClick={() => onAddToWishlist(item)}>Remove</button>
        )}

        {/*  */}
      </div>
    </div>
  );
}

function WishlistComponent({ wishlistArr, onAddToWishlist, clickedNav }) {
  return (
    <section className="wishlist-stn">
      <Bar />

      {!wishlistArr.length && <h3 className="empty">You haven't liked any bag yet😢</h3>}

      <div className="pack">
        {wishlistArr.map((item) => (
          <ItemComponent
            item={item}
            key={item.id}
            clickedNav={clickedNav}
            onAddToWishlist={onAddToWishlist}
          />
        ))}
      </div>
    </section>
  );
}

function CartComponent({ cartArr, clickedNav, onAddToWishlist }) {
  return (
    <section className="cart-stn">
      <Bar />

      {!cartArr.length && <h3 className="empty">You haven't added any item to your cart yet😢</h3>}

      <div className="pack">
        {cartArr.map((item) => (
          <ItemComponent
            item={item}
            key={item.id}
            clickedNav={clickedNav}
            onAddToWishlist={onAddToWishlist}
          />
        ))}
      </div>
    </section>
  );
}
