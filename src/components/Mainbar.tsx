import { Outlet } from "react-router-dom";

const Mainbar = () => {
  return (
    <main className='lg:col-span-4 w-full lg:px-0 lg:pt-0 p-5 h-screen'>
        <Outlet />
    </main>
  )
}

export default Mainbar;