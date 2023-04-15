import React, { FC } from 'react'
import { ComponentStatic } from '@/helper/common';
import { renderLayoutLogin } from '@/layout/LayoutLogin/LayoutLogin';
import Login from '@/container/Login';

const LoginPage: FC & ComponentStatic = () =>  {
  return (
    <Login/>
  )
}
LoginPage.renderLayout = renderLayoutLogin;

export default LoginPage;