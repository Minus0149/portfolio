import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Minus - About</title>
      </Head>
      <div className= "">

      </div>
    </div>
  );
};


export default Home;

export const getServerSideProps = async(context:GetServerSidePropsContext)=>{
  
  const res = await fetch("http://localhost:3000/api/services")
  const data =await res.json();

  return {
    props:{
      services:data.services,
    },
  }
}