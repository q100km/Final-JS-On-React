import ReactLogoComponent from './assets/react.svg?react'
import reactLogoSvg from './assets/react.svg'

console.log(ReactLogoComponent)
console.log(reactLogoSvg)

export const App = () => (
  <div>
    <h1>Hello wrld</h1>
    <img src={reactLogoSvg} alt='logo' />
    <ReactLogoComponent />
    <h2>{new Date().getFullYear()}</h2>
  </div>
)
