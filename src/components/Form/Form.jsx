import React, { useState } from 'react'
import Input from './Label-input'
import Button from './Button'
import moment from 'moment'

const Form = ({ addDonates }) => {
  //
  let [disabledBtn, setDisabledBtn] = useState(true)

  let [value, setValue] = useState('')

  let getCurrentInputValue = (value) => {
    setValue(value)
    if (value > 0 && value <= 100) {
      setDisabledBtn(false)
    } else {
      setDisabledBtn(true)
    }
  }

  let addNewDonate = (event) => {
    event.preventDefault()
    // let inputValue = +event.target.elements.amount.value
    // event.target.elements.amount.value = ''

    let date = moment().format('DD/MM/YYYY, HH:mm:ss -')
    let key = new Date().getTime()
    let id = Number(new Date().getTime())
    //
    addDonates({ value, date, key, id })
    setValue('')
  }

  return (
    <form onSubmit={addNewDonate} className='donate-form'>
      <Input value={value} getCurrentInputValue={getCurrentInputValue} />
      <Button disabled={disabledBtn} />
    </form>
  )
}

export default Form
