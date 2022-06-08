import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Provider} from "react-redux";
import React from "react";
import UserStore from "../app/viewModels/User/class/UserStore";

const userStore = new UserStore();

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={userStore.store}>
      <Component {...pageProps}/>
    </Provider>
  );
}

export default userStore.nextWrapper.withRedux(MyApp);
