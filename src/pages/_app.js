import React from 'react';
import App from 'next/app';
import 'normalize.css';
import '../styles/globals.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { wrapper } from '../redux/store';
import thunk from 'redux-thunk';

class MyApp extends App {

  static getInitialProps = async ({ Component, ctx }) => {


    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
        // Some custom thing for all pages
        pathname: ctx.pathname,
      },
    };

  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <div className="sm:container mx-auto" >
        <Component {...pageProps} />
      </div>
    )
  }

}

export default wrapper.withRedux(MyApp);
