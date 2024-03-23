import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import SearchComponent from "./components/SearchComponent";
import ProductDescription from "./components/ProductDescription";
import WishlistAndCartComponent from "./components/WishlistAndCartComponent";

import { bagItems } from "./components/ItemsComponent";

import { useState } from "react";

export default function App() {
  const [bagsList, setBagsList] = useState([...bagItems]);

  const [clickedNav, setClickedNav] = useState("home");
  const [bag, setBag] = useState(null);

  const [isOpen, setIsOpen] = useState(true);
  const [show, setShow] = useState(false);
  const [isWishOrCart, setIsWishOrCart] = useState(false);

  const [searchValue, setSearchValue] = useState("");

  const cartArr = bagsList.filter((bag) => bag.cart);

  function handleOpen() {
    setIsOpen(!isOpen);
    setClickedNav("home");
  }

  function handleSetBag(a) {
    setBag(a);
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

  function handleShow() {
    setShow(!show);
    setSearchValue("");
  }

  function handleSearchedProduct(theSearched) {
    handleOpen();
    handleShow();
    handleSetBag(theSearched);
  }

  return (
    <div className="app">
      <NavBar
        clickedNav={clickedNav}
        setClickedNav={setClickedNav}
        cartArr={cartArr}
        onShow={handleShow}
        show={show}
        isWishOrCart={isWishOrCart}
        setIsWishOrCart={setIsWishOrCart}
      />

      <WishlistAndCartComponent
        bagsList={bagsList}
        clickedNav={clickedNav}
        onAddToWishlist={handleAddToWishList}
        cartArr={cartArr}
        isWishOrCart={isWishOrCart}
      />

      <SearchComponent
        show={show}
        onShow={handleShow}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        bagsList={bagsList}
        onSearchedProduct={handleSearchedProduct}
      />

      {isOpen ? (
        <HomePage
          bagsList={bagsList}
          onClickedBag={handleClickedBag}
          onAddToWishlist={handleAddToWishList}
        />
      ) : (
        <ProductDescription onOpen={handleOpen} bag={bag} onAddToCart={handleAddToCart} />
      )}
    </div>
  );
}
