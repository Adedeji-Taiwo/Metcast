import React, {FC} from 'react';
import { profile, logo } from '../../assets/header';
import {Button} from '../index';
import { Profile, SearchBar } from './index';



type HeaderProps = {
  openMenu: boolean,
  setOpenMenu: (value: React.SetStateAction<boolean>) => void,
}



const Header:FC<HeaderProps> = ({openMenu, setOpenMenu}) => {
  return (
    <header className={`col-span-5 flex justify-between items-center xl:gap-[220px] lg:gap-[165px] z-[70] bg-white xl:py-[18px] lg:py-[15px] py-[13.5px] xl:px-24 lg:px-[72px] md:px-5 px-4 relative`}>
      {/*mobile hamburger*/}
      <Button 
            type="button" 
            className="inline-flex items-center justify-start py-[9px] px-0 text-sm text-secondary-dark rounded-lg lg:hidden focus:outline-none" 
            children={
               <>
                   <svg className='w-6 h-4 md:w-7 md:h-5' viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M24 1.5H0V0H24V1.5ZM24 13.5H0V12H24V13.5ZM24 7.488H0V6H24V7.488Z" fill="#333333"/>
                   </svg>

               </>
            }
           onClick={() => setOpenMenu(!openMenu)}
       />
      <img src={logo} alt="logo" className='w-full h-auto object-contain lg:max-w-[100px] md:max-w-[80px] max-w-[60px] -mt-2'/>

      <SearchBar />
      <Profile 
        profile={profile}
      />
       
    
     
    </header> 
  )
}

export default Header;