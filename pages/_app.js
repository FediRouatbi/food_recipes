import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import store from "../store/index";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pages = ["/login", "forgotPassword", "/signup", "/404"];
  const hidden = pages.includes(router.pathname);

  return (
    <Provider store={store}>
      <div id="modal"></div>
      {!hidden && <Header />}

      <Component {...pageProps} />
      {!hidden && <Footer />}
    </Provider>
  );
}

export default MyApp;
