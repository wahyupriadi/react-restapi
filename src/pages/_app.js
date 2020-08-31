import 'normalize.css';
import '../styles/globals.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { wrapper } from '../redux/store';
import thunk from 'redux-thunk';

const getInitialProps = async ({ Component, ctx }) => {
  return {
    pageProps: {
      // Call page-level getInitialProps
      ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
    }
  };
}

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="sm:container mx-auto">
      <Component {...pageProps} />
    </div>
  )
}

export default wrapper.withRedux(MyApp);
