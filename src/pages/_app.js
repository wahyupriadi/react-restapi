import 'normalize.css';
import '../styles/globals.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="sm:container mx-auto">
      <Component {...pageProps} />
    </div>
  )
  
}

export default MyApp
