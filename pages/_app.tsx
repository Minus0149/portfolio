import Sidebar from "@components/sidebar";
import "@styles/tailwind.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-cols-12 gap-6 my-14 lg:px-48 sm:px-5">
      <div className="col-span-12 lg:col-span-3 rounded-2xl p-4 text-center">
        <Sidebar />
      </div>
      <div className="col-span-12 lg:col-span-9 rounded-2xl">
        <Component {...pageProps} />;
      </div>
    </div>
  );
}

export default MyApp;
