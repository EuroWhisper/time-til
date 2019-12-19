import React from 'react'
import withRedux from "next-redux-wrapper";
import App from 'next/app'
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux';
import store from '../redux/store';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    margin: 0;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  h3 {
    font-size: 1.25rem;
  }
`

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  // This function sets the props for the MyApp component.
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    if (ctx.req && ctx.req.session.passport) {
      pageProps.user = ctx.req.session.passport.user;
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    // If there is a user, add it to our global state.
    if (pageProps.user) {
      store.dispatch({type: 'SET_USER', payload: pageProps.user});
    }
    return (<div><Provider store={store}><Component {...pageProps} /><GlobalStyle></GlobalStyle></Provider></div>)
  }
}

export default withRedux(() => store)(MyApp);