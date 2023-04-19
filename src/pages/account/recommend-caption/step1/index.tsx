import { renderMainLayout } from "@/layout/MainLayout/MainLayout";
import React, { FC } from "react";
import { ComponentStatic } from "@/helper/common";
import Step0 from "@/container/Recommend-Caption/Step0";
import { Head } from "next/document";

const Step1: FC & ComponentStatic = () => {
  return (
    <>
      <Head>
        <title>Recommend Captions</title>
      </Head>
      <Step0 />
    </>
  );
};

Step1.renderLayout = renderMainLayout;

export default Step1;
