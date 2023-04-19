import { renderMainLayout } from "@/layout/MainLayout/MainLayout";
import React, { FC } from "react";
import { ComponentStatic } from "@/helper/common";
import Step0 from "@/container/Recommend-Caption/Step0";

const RecommendCaptionPage: FC & ComponentStatic = () => {
  return (
    <>
      <Step0 />
    </>
  );
};

RecommendCaptionPage.renderLayout = renderMainLayout;

export default RecommendCaptionPage;
