import Bar from "@components/Bar";
import { languages, tools } from "@hooks/data";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const Resume: NextPage = () => {
  return (
    <div className="flex flex-col p-4 pt-0 space-y-3">
      <Head>
        <title>Minus - Resume</title>
      </Head>

      <div className="flex flex-col gap-3">
        <h5 className="text-xl font-semibold tracking-wider">Education :</h5>
        <div>
          <h5 className="mt-2 text-xl font-bold">High School</h5>
          <p className="font-semibold">Morning Star English School</p>
          <p className="text-sm font-light">
            From : 06/2010 <br /> To : 05/2020
          </p>
        </div>
        <div>
          <h5 className="mt-2 text-xl font-bold">I & II PUC</h5>
          <p className="font-semibold">Shaheen Falcon PU college</p>
          <p className="text-sm font-light">
            From : 06/2020 <br /> To : 05/2022
          </p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="mb-3 text-2xl font-bold">Languages & Frameworks :</h5>
          <div className="">
            {languages.map((language) => (
              <Bar data={language} key={language.Id} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="mb-3 text-2xl font-bold">Tools & Softwares :</h5>
          <div className="">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.Id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
