import { useState } from "react";
import exitBtn from "../images/icons/exitBtn.svg";

export default function SearchComponent({
  show,
  onShow,
  searchValue,
  setSearchValue,
  bagsList,
  onSearchedProduct,
}) {
  const [filteredItems, setFilteredItems] = useState([]);

  function handleSearch(e) {
    const inputValue = e.target.value.trim();
    setSearchValue(inputValue);

    setFilteredItems(
      bagsList.filter((bag) => bag.name.toLowerCase().includes(inputValue.toLowerCase()))
    );
  }

  //   console.log(filteredItems);

  return (
    <section className={`search-page-stn ${show ? "show" : ""}`}>
      <div className="container">
        <div className="input-container">
          <div className="input-stn">
            <div className="img-holder" onClick={onShow}>
              <img src={exitBtn} alt="exit" />
            </div>

            <input
              type="text"
              value={searchValue}
              onChange={handleSearch}
              placeholder="Type here to search..."
            />
          </div>

          <section className="search-results">
            {!filteredItems.length && <p>No results found</p>}

            {filteredItems.map((bag) => (
              <p key={bag.id} onClick={() => onSearchedProduct(bag)}>
                {bag.name}
              </p>
            ))}
          </section>
        </div>
      </div>
    </section>
  );
}
