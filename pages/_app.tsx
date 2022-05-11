import Sidebar from "@components/Sidebar";
import "@styles/tailwind.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-cols-12 gap-6 px-6 my-14 lg:px-48">
      <div className="col-span-12 p-4 text-center bg-white lg:col-span-6 xl:col-span-4 2xl:col-span-3 rounded-2xl ">
        <Sidebar />
      </div>
      <div className="col-span-12 lg:col-span-6 xl:col-span-8 2xl:col-span-9 rounded-2xl">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
