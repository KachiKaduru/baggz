import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ProductDescription from "./components/ProductDescription";
import WishlistAndCartComponent from "./components/WishlistAndCartComponent";

import { bagItems } from "./components/ItemsComponent";

import { useState } from "react";

export default function App() {
  const [clickedNav, setClickedNav] = useState("home");

  const [bagsList, setBagsList] = useState([...bagItems]);
  const [isOpen, setIsOpen] = useState(true);
  const [bag, setBag] = useState(null);

  const cartArr = bagsList.filter((bag) => bag.cart);

  function handleOpen() {
    setIsOpen(!isOpen);
    setClickedNav("home");
  }

  function handleClickedBag(e, y) {
    setBag(y);
    e.target.classList.contains("heart") ? setIsOpen(true) : handleOpen();
  }

  function handleAddToWishList(curBag) {
    setBagsList((bagsList) =>
      bagsList.map((bg) => (bg.id === curBag.id ? { ...bg, liked: !bg.liked } : bg))
    );
  }

  function handleAddToCart(curBag) {
    setBag({ ...curBag, cart: true });

    setBagsList((bagsList) =>
      bagsList.map((theBag) => (theBag.id === curBag.id ? { ...theBag, cart: true } : theBag))
    );
  }

  return (
    <div className="app">
      <NavBar clickedNav={clickedNav} setClickedNav={setClickedNav} cartArr={cartArr} />
      <WishlistAndCartComponent
        bagsList={bagsList}
        clickedNav={clickedNav}
        onAddToWishlist={handleAddToWishList}
        cartArr={cartArr}
      />

      {isOpen && (
        <>
          <HomePage
            bagsList={bagsList}
            onClickedBag={handleClickedBag}
            onAddToWishlist={handleAddToWishList}
          />
        </>
      )}
      {isOpen || <ProductDescription onOpen={handleOpen} bag={bag} onAddToCart={handleAddToCart} />}
    </div>
  );
}
