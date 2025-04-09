import React from 'react'

const Button = ({ disabled }) => {
  //
  let onClick = () => {
    // console.log('онклик кнопки')
  }
  //
  return (
    <button disabled={disabled} onClick={onClick} className='donate-form__submit-button' type='submit'>
      click
    </button>
  )
}

export default Button
