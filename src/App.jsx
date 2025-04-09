// import ReactLogoComponent from './assets/react.svg?react'
// import reactLogoSvg from './assets/react.svg'
// import { createElement } from 'react'
import Title from './components/Title'
import Form from './components/Form/Form'
import DonatesContainer from './components/DonatesContainer/DonatesContainer'
import { useState } from 'react'

export const App = () => {
  //
  let [donArray, setItemArray] = useState([])

  let addDonates = (donObject) => {
    //
    setItemArray([...donArray, donObject])
  }

  let donSum = 0
  donArray.forEach(({ value }) => {
    donSum += value
  })

  let deleteItem = (item) => {
    setItemArray(item)
  }

  console.log(donArray, 'donArray')

  return (
    <div className='app'>
      <Title value={donSum} />
      <Form addDonates={addDonates} />
      <DonatesContainer deleteItem={deleteItem} donArray={donArray} />
    </div>
  )
}

//  Декларативный через JSX, реакт все сам создаст, мы просто указываем что хотим видеть

// export const App = () => (
//   <div>
//     <h1>Hello wrld</h1>
//     <img src={reactLogoSvg} alt='logo' />
//     <ReactLogoComponent />
//     <h2>{new Date().getFullYear()}</h2>
//   </div>
// )

//  Императивный, мы сами все создаем и конкретно указываем детали

// export function App() {
//   return createElement(
//     'div',
//     { className: 'container' },
//     createElement('h1', { className: 'hello' }, 'hello wrld'),
//     createElement('img', { src: reactLogoSvg }),
//     createElement(ReactLogoComponent),
//     createElement('h2', { className: 'date' }, new Date().getFullYear())
//   )
// }

/*

props — это объект,который содержит все переданные данные,
включая АТРИБУТЫ (например, className, style, label)- props.className
и children (ВЛОЖЕННЫЕ ЭЛЕМЕНТЫ, такие как <h1>, <div>)

function MyComponent(props) {
  return (
    <div className={props.className} style={props.style}>
      {props.children}
    </div>
  );
}

<MyComponent className="qwerty" style={{ color: 'red',}}>
  <h1> hello wrld </h1>
</MyComponent>

*/
