import { renderMainLayout } from '@/layout/MainLayout/MainLayout';
import React, { FC } from 'react'
import { ComponentStatic } from '@/helper/common';
import Recommendation from '@/container/Recommendation';

const RecommendationPage: FC & ComponentStatic = () =>  {
  return (
    <Recommendation />
  )
}

RecommendationPage.renderLayout = renderMainLayout;

export default RecommendationPage;