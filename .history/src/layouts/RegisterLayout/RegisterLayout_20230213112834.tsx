import React, { ReactNode } from 'react'
import RegisterHeader from 'src/components/RegisterHeader'

interface Props {
  children?: ReactNode
}

const RegisterLayout = ({ children }: Props) => {
  return (
    <div>
      <RegisterHeader />
      {children}
    </div>
  )
}

export default RegisterLayout
