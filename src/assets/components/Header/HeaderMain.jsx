import React from 'react'

const HeaderMain = () => {

  const Navlink = ["CANDLES", "AROMATHERAPY", "AIR FRESHNER", "THE GIFT SHOP", "THE ARADHANA SHOP", "COLLECTIONS", "HOME DECOR", "BULK ENQUIRY", "CONTACT US"]
  return (
    <div className='border-b-[0.8px] border-[#dfe3e8]'>
      <nav>
        <ul className='flex items-center justify-center'>
          {Navlink.map((val) => {
            return (
              <li>
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