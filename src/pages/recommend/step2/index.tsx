import { renderMainLayout } from "@/layout/MainLayout/MainLayout";
import React, { FC } from "react";
import { ComponentStatic } from "@/helper/common";
import Step1 from "@/container/Recommend-Caption/Step1";
import Head from "next/head";

const Step2Page: FC & ComponentStatic = () => {
  return (
    <>
      <Head>
        <title>Recommend Captions</title>
      </Head>
      <Step1 />
    </>
  );
};

Step2Page.renderLayout = renderMainLayout;

export default Step2Page;
