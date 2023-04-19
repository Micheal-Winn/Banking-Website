import React from 'react'
import Container from './Container'
import { Auth } from './Auth'

type Props = {}

const AuthenticationPage = (props: Props) => {
  return (
    <Container>
        <Auth/>
    </Container>
  )
}

export default AuthenticationPage