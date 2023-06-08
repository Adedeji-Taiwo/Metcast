import {useContext} from 'react'
import { Route, Routes } from "react-router-dom"
import { Toaster } from 'react-hot-toast'
import { MetCastContext, MetCastContextType } from "./context/metcast.context"
import { Home } from "./pages"
import { Overlay } from './components'
import {Map, Footer} from './components/index'


const App = () => {
  const {openMenu, setOpenMenu}  = useContext(MetCastContext) as MetCastContextType;

  return (
    <div className="flex flex-col items-start justify-start xl:gap-14 lg:gap-10 gap-7 relative z-0 bg-white min-h-screen">
       <Toaster />
      <Overlay openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <Routes>
        <Route element={<Home openMenu={openMenu} setOpenMenu={setOpenMenu} />}>
          <Route path='/location/:city' element={<Map />}/>
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
