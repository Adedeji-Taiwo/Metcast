import { footer } from '../constants/data';

const Footer = () => {
    return (
        <div className={`flex items-center justify-center md:pt-[70px] sm:pt-16 pt-9 w-full xl:gap-x-4 bg-blackish`}>
            <div className='flex flex-col items-start justify-start md:gap-10 gap-4 w-full'>
                <div className='w-full flex md:flex-row md:flex-wrap flex-col md:items-start md:justify-start xl:gap-44 lg:gap-32 md:gap-16 gap-8 md:mb-8 md:px-5 px-4 '>
                    <div className='flex flex-col items-start justify-start lg:gap-9 md:gap-5 gap-3 md:mb-0 mb-2'>
                        <img src={footer.logo} alt="logo" className='h-auto w-full lg:max-w-[100px] md:max-w-[80px] max-w-[60px] ' />
                        <p className='font-mulish font-medium xl:text-xl md:text-sm text-xs text-[#ccc]'>{footer.tagline}</p>
                    </div>
                    {footer.menuList.map(({ menu, submenu }: { menu: string, submenu: string[] }) => (
                        <div key={menu} className='flex flex-col items-start justify-start md:gap-7 gap-4'>
                            <h3 key={menu} className="font-mulish font-semibold xl:text-2xl md:text-xl xs:text-base text-sm text-white">{menu}</h3>
                            <p className='flex flex-col items-start justify-start md:gap-6 gap-4'>
                                {submenu.map((submenu) => (
                                    <a href='#' key={submenu} className="font-mulish font-normal xl:text-xl md:text-sm text-xs text-[#ccc] hover:text-primary">{submenu}</a>
                                ))}
                            </p>
                        </div>
                    ))}
                </div>
                <hr className='w-full bg-[#494949]' />
                <p className='font-mulish font-normal text-xs md:mb-12 mb-[18px] text-[#ccc] lg:gap-x-3 md:px-5 px-4'>{footer.rights}</p>
            </div>
        </div>
    )
}

export default Footer