import React from 'react'

const DonateItem = ({ value, date, currentBtn, id }) => {
  //
  // console.log(itemID)
  return (
    <div id={id} className='donate-item'>
      {date} <b>{value}$</b>
      <button onClick={currentBtn} className='delete-button'>
        Удалить
      </button>
    </div>
  )
}

export default DonateItem
