import { createContext, useState } from "react";
export const FavouriteContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

function FavouriteContextProvider({ children }) {
  const [favouriteFoodIds, setFavouriteFoodIds] = useState([]);

  function addFavourite(id) {
    setFavouriteFoodIds((current) => [...current, id]);
  }
  function removeFavourite(id) {
    setFavouriteFoodIds((current) => current.filter((foodId) => foodId !== id));
  }
  const value = {
    ids: favouriteFoodIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };
  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteContextProvider