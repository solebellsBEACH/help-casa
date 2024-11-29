import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@/pages/shared/context/UserContext";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ToastContainer />
      <Component {...pageProps} />
    </UserProvider>
  );
}
