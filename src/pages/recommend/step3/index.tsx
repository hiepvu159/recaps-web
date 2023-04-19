import { renderMainLayout } from "@/layout/MainLayout/MainLayout";
import React, { FC } from "react";
import { ComponentStatic } from "@/helper/common";
import Step2 from "@/container/Recommend-Caption/Step2";
import Head from "next/head";

const Step3Page: FC & ComponentStatic = () => {
  return (
    <>
      <Head>
        <title>Recommend Captions</title>
      </Head>
      <Step2 />
    </>
  );
};

Step3Page.renderLayout = renderMainLayout;

export default Step3Page;
