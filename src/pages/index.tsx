import Home from '@/container/Home';
import { renderMainLayout } from '@/layout/MainLayout/MainLayout';
import React, { FC } from 'react'
import { ComponentStatic } from '../helper/common';

const HomePage: FC & ComponentStatic = () =>  {
  return (
    <Home />
  )
}

HomePage.renderLayout = renderMainLayout;

export default HomePage;