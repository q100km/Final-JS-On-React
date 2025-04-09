import React from 'react'
import DonateItem from './Donate-Item'

const DonatesContainer = ({ donArray, deleteItem }) => {
  //
  let currentBtn = (event) => {
    //
    let itemToDelete = donArray.filter(({ id }) => {
      let targetId = +event.target.closest('.donate-item').id
      return id !== targetId
    })
    deleteItem(itemToDelete)
  }

  let text = 'Список донатов'
  if (donArray.length === 0) text = 'Список донатов ПУСТ !!!'

  return (
    <div className='donates-container'>
      <h2 className='donates-container__title'>{text}</h2>

      {donArray.map(({ value, date, key, id }) => {
        return <DonateItem id={id} currentBtn={currentBtn} value={value} date={date} key={key} />
      })}
    </div>
  )
}

export default DonatesContainer
