import { renderMainLayout } from "@/layout/MainLayout/MainLayout";
import React, { FC } from "react";
import { ComponentStatic } from "@/helper/common";
import CompleteStep from "@/container/Recommend-Caption/CompleteStep";
import Step3 from "@/container/Recommend-Caption/Step3";
import Head from "next/head";

const Step4: FC & ComponentStatic = () => {
  return (
    <>
      <Head>
        <title>Recommend Captions</title>
      </Head>
      <Step3 />
    </>
  );
};

Step4.renderLayout = renderMainLayout;

export default Step4;
