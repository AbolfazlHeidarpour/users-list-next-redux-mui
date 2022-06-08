import {useSelector} from "react-redux";
import UserManagerState from "../../../models/Users/UserManagerState";
import React from "react";
import {CookieValueTypes} from "cookies-next/lib/types";
import {getCookie, removeCookies, setCookies} from "cookies-next";

const useFavoriteUserCookie = () => {
  const favorites = useSelector((state: UserManagerState) => state.favorites);
  const [guest, setGuest] = React.useState<CookieValueTypes>('');

  React.useEffect(() => {
    if (favorites.length !== 0) {
      const latestFavorite = favorites[favorites.length - 1];
      setCookies('guest', latestFavorite.name);
    } else removeCookies('guest');

    const currentCookie = getCookie('guest');
    setGuest(currentCookie ? currentCookie : 'میهمان');
  }, [favorites]);

  return guest;
};

export default useFavoriteUserCookie;