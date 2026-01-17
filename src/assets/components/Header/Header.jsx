import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderMiddle from './HeaderMiddle'
import HeaderMain from './HeaderMain'

const Header = () => {
  return (
    <div className='sticky top-0 z-50 bg-white'>
      <HeaderTop />
        <HeaderMiddle />
        <HeaderMain />
    </div>
  )
}

export default Header