"use client"

import { MantineProvider } from '@mantine/core';
import React from 'react'
import AuthenticationPage from '../components/Authentication/AuthenticationPage';

const Registertaion = () => {
  return (
    <MantineProvider withGlobalStyles withCSSVariables withNormalizeCSS>
    <AuthenticationPage/>
    </MantineProvider>
  )
}

export default Registertaion;
