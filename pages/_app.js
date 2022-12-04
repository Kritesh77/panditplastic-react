import "../styles/globals.css";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "redux/store/store";
import { persistor } from "../redux/store/store";
import Layout from "components/Layout";
import "react-toastify/dist/ReactToastify.css";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />{" "}
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
