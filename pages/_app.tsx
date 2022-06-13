import Navbar from "@components/Navbar";
import Sidebar from "@components/Sidebar";
import "@styles/tailwind.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-6 lg:pt-20 my-7 lg:mb-0 md:mb-16 lg:px-48 md:px-32 sm:px-24">
        <div className="col-span-12 p-4 text-center bg-white dark:bg-zinc-900 lg:pt-10 lg:col-span-6 xl:col-span-4 2xl:col-span-3 rounded-2xl">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 bg-white dark:bg-zinc-900 lg:col-span-6 xl:col-span-8 2xl:col-span-9 rounded-2xl">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
