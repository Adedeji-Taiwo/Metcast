import React, { FC } from 'react'
import { Sidebar, Mainbar, Header } from '../components/index'

type HomePropTypes = {
  openMenu: boolean
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const Home: FC<HomePropTypes> = ({ openMenu, setOpenMenu }) => {

  return (
      <div className='flex-grow w-full overflow-y-auto grid lg:grid-cols-5 grid-cols-1 xl:gap-y-7 lg:gap-y-[21px] xl:gap-x-4 lg:gap-x-3 bg-dashboard-bg'>
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Mainbar />
    </div>
  )
}

export default Home