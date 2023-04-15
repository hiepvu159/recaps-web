import { renderMainLayout } from '@/layout/MainLayout/MainLayout';
import React, { FC } from 'react'
import { ComponentStatic } from '@/helper/common';
import HomeUser from '@/container/HomeUser';

const AcountPage: FC & ComponentStatic = () =>  {
  return (
    <>
    <HomeUser/>
    </>
  )
}

AcountPage.renderLayout = renderMainLayout;

export default AcountPage;