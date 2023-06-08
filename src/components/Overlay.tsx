import React, {FC} from 'react'

type OverlayProp = {
    openMenu: boolean,
    setOpenMenu: (value: React.SetStateAction<boolean>) => void,
 
}


const Overlay:FC<OverlayProp> = ({openMenu, setOpenMenu}) => {

  return (
    <> 
        {openMenu && <div className={`bg-black opacity-10 fixed inset-0 w-full h-full block lg:hidden z-50`} onClick={() => setOpenMenu(false)}></div>}
    </>
  )
}

export default Overlay;