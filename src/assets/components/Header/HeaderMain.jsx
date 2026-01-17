import React from 'react'

const HeaderMain = () => {

  const Navlink = ["CANDLES", "AROMATHERAPY", "AIR FRESHNER", "THE GIFT SHOP", "THE ARADHANA SHOP", "COLLECTIONS", "HOME DECOR", "BULK ENQUIRY", "CONTACT US"]
  return (
    <div className=' border-b-[0.8px] border-[#dfe3e8]'>
      <nav>
        <ul className='hidden md:flex items-center justify-center flex-wrap'>
          {Navlink.map((val, idc) => {
            return (
              <li key={idc}>
                <a href="" className='block px-2.5 py-4.5 capitalize text-[#091f40] hover:text-[#769cd1] text-[15px]'>{val.toLocaleLowerCase()}</a>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default HeaderMain