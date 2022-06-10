import Bar from "@components/Bar";
import { languages, tools } from "@hooks/data";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const Resume: NextPage = () => {
  return (
    <div className="flex flex-col p-4 pt-0 space-y-6">
      <Head>
        <title>Minus - Resume</title>
      </Head>

      <div>
        <h5 className="text-xl font-semibold tracking-wider">Education :</h5>
        <div>{/* Fill this out later */}</div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="mb-3 text-2xl font-bold">Languages & Frameworks :</h5>
          <div className="mt-6">
            {languages.map((language) => (
              <Bar data={language} key={language.Id} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="mb-3 text-2xl font-bold">Tools & Softwares :</h5>
          <div className="mt-6 ">
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
