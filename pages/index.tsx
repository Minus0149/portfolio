import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>Minus - portfolio</Head>
      <div className="h-[100vh] flex flex-col justify-center align-middle text-center">
        <h1 className="text-[72px] bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 font-extrabold">
          Start of our project
        </h1>
      </div>
    </div>
  );
};

export default Home;
