import { useEffect } from 'react'

type SecondLayoutProps = {
  children?: React.ReactNode
}

const SecondLayout = ({ children }: SecondLayoutProps) => {
  useEffect(() => {
    console.log('second Layout')
  }, [])
  return <>{children}</>
}

export default SecondLayout
