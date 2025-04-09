import React from 'react'

const Title = ({ value }) => {
  //
  return (
    <h1 className='total-amount'>
      Итого: $<span>{value}</span>
    </h1>
  )
}

export default Title
