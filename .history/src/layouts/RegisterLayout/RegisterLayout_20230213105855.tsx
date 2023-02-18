import React, { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const RegisterLayout = ({ children }: Props) => {
  return <div>{ children }
}

export default RegisterLayout
