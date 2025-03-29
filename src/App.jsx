import HeaderPage from './Components/layout/header'
import FooterPage from './Components/layout/footer'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <HeaderPage />
      <Outlet />
      <FooterPage />
    </>
  )
}

export default App
