import React, { createContext, useState } from "react";

export const WishList = createContext();

function WishListProvider({ children }) {
  const [wishList, setWishList] = useState([]);

  function addWishlist(item) {
    const index = wishList.findIndex((x) => x.id === item.id);
    if (index !== -1) {
      wishList[index].count++;
      setWishList(wishList.filter((x) => x.id !== item.id));
    } else {
      setWishList([...wishList, { ...item }]);
    }
  }
  function isExist(item) {
    return wishList.findIndex((x) => x.id == item.id) !== -1;
  }

  return (
    <div>
      <WishList.Provider value={{ wishList, addWishlist, isExist }}>
        {children}
      </WishList.Provider>
    </div>
  );
}

export default WishListProvider;
