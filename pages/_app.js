import "../styles/globals.scss";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../reducers/index";

function MyApp ({ Component, pageProps }) {
  return (
	<Component {...pageProps} />
  )
}

const initialState = { user: {} };
const store = createStore(reducer, initialState);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
