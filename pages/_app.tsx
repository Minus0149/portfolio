import Navbar from "@components/Navbar";
import Sidebar from "@components/Sidebar";
import "@styles/tailwind.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-cols-12 gap-6 px-6 my-7 lg:mb-0 md:mb-16 lg:px-48 md:px-32 sm:px-24 ">
      <div className="col-span-12 p-4 text-center bg-white lg:col-span-6 xl:col-span-4 2xl:col-span-3 rounded-2xl ">
        <Sidebar />
      </div>
      <div className="flex flex-col col-span-12 lg:col-span-6 xl:col-span-8 2xl:col-span-9 rounded-2xl">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
