import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@/pages/shared/context/UserContext";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "@/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <UserProvider>
        <ToastContainer />
        <Component {...pageProps} />
      </UserProvider>
    </Provider>
  );
}
