import {Dispatch} from "redux";
import {FavoriteUsersActions} from "../../../viewModels/User/types/FavoriteUsersActions";
import {useDispatch, useSelector} from "react-redux";
import UserManagerState from "../../../models/Users/UserManagerState";
import React from "react";
import {FavoriteUserActionTypes} from "../../../viewModels/User/enum/FavoriteUserActionTypes";

const useFavorites = () => {
  const dispatch: Dispatch<FavoriteUsersActions> = useDispatch();
  const favorites = useSelector((state: UserManagerState) => state.favorites);

  const handleAddUserToFavorites = React.useCallback(
    (id: number, name: string) =>
      dispatch({
        type: FavoriteUserActionTypes.ADD_FAVORITE_USER,
        payload: {id: id, name: name}
      })
    ,
    [dispatch]
  );

  const handleRemoveUserFromFavorites = React.useCallback(
    (id: number) => {
      const filteredFavorites = favorites.filter(favorite => favorite.id !== id);

      dispatch({
        type: FavoriteUserActionTypes.REMOVE_FAVORITE_USER,
        payload: filteredFavorites
      });
    },
    [dispatch, favorites]
  );

  const isFavorite = React.useCallback((id: number) =>
    {
      const index = favorites.findIndex(fav => fav.id === id);

      return index !== -1;
    }
  , [favorites]);

  return {
    isFavorite,
    favorites,
    handleAddUserToFavorites,
    handleRemoveUserFromFavorites
  };
};

export default useFavorites;