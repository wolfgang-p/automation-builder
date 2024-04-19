import InfoBar from '@/components/infobar'
import MenuOptions from '@/components/sidebar'
import React from 'react'

type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
  return (
    <div className='flex overflow-hidden h-screen'>
      <MenuOptions />
      <div className='w-full'>
        <InfoBar />
        {props.children}
      </div>
    </div>
  )
}

export default Layout