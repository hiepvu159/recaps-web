import React, { FC } from 'react'
import { ComponentStatic } from '@/helper/common';
import { renderLayoutLogin } from '@/layout/LayoutLogin/LayoutLogin';
import Register from '@/container/Register';

const RegisterPage: FC & ComponentStatic = () =>  {
  return (
    <Register/>
  )
}
RegisterPage.renderLayout = renderLayoutLogin;

export default RegisterPage;