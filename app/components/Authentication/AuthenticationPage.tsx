"use client"

import React from 'react'
import Container from './Container'
import { Auth } from './Auth'
import SidePhoto from './SidePhoto'

type Props = {}

const AuthenticationPage = (props: Props) => {
  return (
    <Container>
        <Auth/>
        <SidePhoto/>
    </Container>
  )
}

export default AuthenticationPage