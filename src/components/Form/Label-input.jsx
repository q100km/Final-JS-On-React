const Input = ({ value, getCurrentInputValue }) => {
  //
  let currentInputValue = (event) => {
    getCurrentInputValue(+event.target.value)
  }

  return (
    <label className='donate-form__input-label'>
      Введите сумму в $
      <input
        value={value}
        onChange={currentInputValue}
        placeholder='Сумма'
        className='donate-form__donate-input'
        name='amount'
        type='number'
        max='100'
        min='1'
        required
      ></input>
    </label>
  )
}

export default Input
