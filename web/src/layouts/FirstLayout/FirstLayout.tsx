import { useEffect } from 'react'

type FirstLayoutProps = {
  children?: React.ReactNode
}

const FirstLayout = ({ children }: FirstLayoutProps) => {
  useEffect(() => {
    console.log('first layout')
  }, [])
  return <>{children}</>
}

export default FirstLayout
