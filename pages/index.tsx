import type { NextPage } from "next";
import Head from "next/head";
import { services } from "@hooks/data";
import ServiceCard from "@hooks/ServiceCard";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col flex-grow p-4 px-6 pt-0">
      <Head>
        <title>Minus - About</title>
      </Head>
      <h5 className="font-medium">
        A 17 year old boy, currently learning DevOps and its culture. Self
        thought Frontend engineer, fimiliar with tools such as Docker, Git,
        Kubernetes, Bash, Linux, etc. Having 1+ year experience with developing
        nad troubleshooting webpages and websites. Developing website using
        HTML, CSS, JavaScript, React and Next.js
      </h5>
      <div className="flex-grow p-4 pt-2 mt-5 -mx-6 -mb-4 rounded-lg bg-slate-400 ">
        <h6 className="my-3 text-xl font-bold tracking-wider">
          What I Offer :
        </h6>
        <div className="grid gap-6 lg:grid-cols-4">
          {services.map((services) => (
            <div
              key={services.Id}
              className="p-5 rounded-lg lg:col-span-2 bg-slate-200"
            >
              <ServiceCard services={services} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
