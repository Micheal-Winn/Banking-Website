"use client"

import { MantineProvider, TextInput ,Text, useMantineTheme,rem} from '@mantine/core'
import styled from '@emotion/styled'
import React from 'react'

interface InputProps{
    placeholder :string
    props:any
    text:string
}

// const StyledInput = styled(TextInput)`
// & .mantine-Button-root {
//   height: ${({theme})=> (theme.breakpoints === 'lg')}
// }
// `

export const CustomInput:React.FC<InputProps> = ({placeholder,props,text}) => {
    const theme = useMantineTheme()
  return (
      <TextInput
      size={'lg'}
        label={
          <Text className="text-base sm:text-[15px] md:text-lg md:mb-1">{text}</Text>
        }
        placeholder={placeholder}
        className="mt-4"
        {...props}
      />
  )
}
