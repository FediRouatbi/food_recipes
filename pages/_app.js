import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import store, { persistor } from "../store/index";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();
  const pages = [
    "/login",
    "forgotPassword",
    "/signup",
    "/404",
    "/forgetpassword",
  ];
  const hidden = pages.includes(router.pathname);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div id="modal"></div>
        {!hidden && <Header />}

        <Component {...pageProps} />
        {!hidden && <Footer />}
        <ToastContainer />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
