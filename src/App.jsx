import ReactLogoComponent from './assets/react.svg?react'
import reactLogoSvg from './assets/react.svg'
import { createElement } from 'react'

console.log(ReactLogoComponent)
console.log(reactLogoSvg)

//  Декларативный через JSX, реакт все сам создаст, мы просто указываем что хотим видеть

// export const App = () => (иш
//   <div>
//     <h1>Hello wrld</h1>
//     <img src={reactLogoSvg} alt='logo' />
//     <ReactLogoComponent />
//     <h2>{new Date().getFullYear()}</h2>
//   </div>
// )

//  Императивный, мы сами все создаем и конкретно указываем детали

export function App() {
  return createElement(
    'div',
    { className: 'container' },
    createElement('h1', { className: 'hello' }, 'hello wrld'),
    createElement('img', { src: reactLogoSvg }),
    createElement(ReactLogoComponent),
    createElement('h2', { className: 'date' }, new Date().getFullYear())
  )
}

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
