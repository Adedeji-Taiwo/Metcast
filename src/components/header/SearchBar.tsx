import { useContext, useState } from "react";
import {
  MetCastContext,
  MetCastContextType,
} from "../../context/metcast.context";
import { SearchFilter } from "./index";


const SearchBar = () => {
  const { handleSearch, searchTerm, setSearchTerm, searchResults } = useContext(
    MetCastContext
  ) as MetCastContextType;
  const [showInterface, setShowInterface] = useState(false);
  

  return (
    <form className="md:relative flex items-center justify-start xl:-ml-9 lg:-ml-[70px]" onSubmit={handleSearch}>
      <div className="absolute inset-y-0 md:left-0 flex items-center lg:pl-4 md:pl-3 pl-[14px] pointer-events-none">
        {showInterface ? (
          <span className="mx-auto pl-[2px] text-blackish md:hidden">x</span>
        ): (
          <svg
          className={`w-3 h-3 block md:hidden`}
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 2.50003C4.93913 2.50003 3.92172 2.92146 3.17157 3.67161C2.42143 4.42175 2 5.43917 2 6.50003C2 7.5609 2.42143 8.57832 3.17157 9.32846C3.92172 10.0786 4.93913 10.5 6 10.5C7.06087 10.5 8.07828 10.0786 8.82843 9.32846C9.57857 8.57832 10 7.5609 10 6.50003C10 5.43917 9.57857 4.42175 8.82843 3.67161C8.07828 2.92146 7.06087 2.50003 6 2.50003ZM1.13461e-07 6.50003C-0.00012039 5.55574 0.222642 4.62475 0.650171 3.78278C1.0777 2.9408 1.69792 2.21163 2.4604 1.65456C3.22287 1.09749 4.10606 0.728246 5.03815 0.576867C5.97023 0.425488 6.92488 0.496245 7.82446 0.783384C8.72404 1.07052 9.54315 1.56594 10.2152 2.22933C10.8872 2.89272 11.3931 3.70537 11.6919 4.60117C11.9906 5.49697 12.0737 6.45063 11.9343 7.38459C11.795 8.31855 11.4372 9.20643 10.89 9.97603L15.707 14.793C15.8892 14.9816 15.99 15.2342 15.9877 15.4964C15.9854 15.7586 15.8802 16.0094 15.6948 16.1949C15.5094 16.3803 15.2586 16.4854 14.9964 16.4877C14.7342 16.49 14.4816 16.3892 14.293 16.207L9.477 11.391C8.57936 12.0293 7.52335 12.4082 6.42468 12.4862C5.326 12.5641 4.22707 12.3381 3.2483 11.833C2.26953 11.3279 1.44869 10.5631 0.875723 9.62239C0.30276 8.68171 -0.000214051 7.60147 1.13461e-07 6.50003Z"
            fill="#6B7280"
          />
        </svg>
        )}
         
        <svg
          className={`w-3 h-3 md:block hidden`}
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 2.50003C4.93913 2.50003 3.92172 2.92146 3.17157 3.67161C2.42143 4.42175 2 5.43917 2 6.50003C2 7.5609 2.42143 8.57832 3.17157 9.32846C3.92172 10.0786 4.93913 10.5 6 10.5C7.06087 10.5 8.07828 10.0786 8.82843 9.32846C9.57857 8.57832 10 7.5609 10 6.50003C10 5.43917 9.57857 4.42175 8.82843 3.67161C8.07828 2.92146 7.06087 2.50003 6 2.50003ZM1.13461e-07 6.50003C-0.00012039 5.55574 0.222642 4.62475 0.650171 3.78278C1.0777 2.9408 1.69792 2.21163 2.4604 1.65456C3.22287 1.09749 4.10606 0.728246 5.03815 0.576867C5.97023 0.425488 6.92488 0.496245 7.82446 0.783384C8.72404 1.07052 9.54315 1.56594 10.2152 2.22933C10.8872 2.89272 11.3931 3.70537 11.6919 4.60117C11.9906 5.49697 12.0737 6.45063 11.9343 7.38459C11.795 8.31855 11.4372 9.20643 10.89 9.97603L15.707 14.793C15.8892 14.9816 15.99 15.2342 15.9877 15.4964C15.9854 15.7586 15.8802 16.0094 15.6948 16.1949C15.5094 16.3803 15.2586 16.4854 14.9964 16.4877C14.7342 16.49 14.4816 16.3892 14.293 16.207L9.477 11.391C8.57936 12.0293 7.52335 12.4082 6.42468 12.4862C5.326 12.5641 4.22707 12.3381 3.2483 11.833C2.26953 11.3279 1.44869 10.5631 0.875723 9.62239C0.30276 8.68171 -0.000214051 7.60147 1.13461e-07 6.50003Z"
            fill="#6B7280"
          />
        </svg>
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onClick={() => setShowInterface(!showInterface)}
        className="block xl:py-[13px] lg:pl-10 pl-7 xl:text-base xl:min-w-[450px] lg:min-w-[350px] md:max-w-[300px] max-w-[40px] text-[#6b7280] bg-[#e7eef9] font-mulish rounded-[10px] border border-[#cdd4df]  lg:text-sm text-xs focus:outline-none transition duration-300 focus:border-primary focus:ring-[0.5px] focus:ring-primary outline-none placeholder:text-xs"
        placeholder="Search for a city..."
      />


         {/*for small screens*/}
      <div
        className={`font-mulish transition-opacity ease-in-out duration-500 absolute inset-x-0 top-full mx-auto bg-white rounded-md shadow-md p-4 md:hidden w-screen ${showInterface ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      >
        <h3 className="text-sm font-semibold mb-4">Enter your city</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Type city name here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border rounded-[10px] text-[#6b7280] py-2 px-4 text-sm leading-tight  focus:outline-none transition duration-300 focus:border-primary focus:ring-[0.5px] focus:ring-primary outline-none placeholder:text-xs border-[#cdd4df]"
          />
          <button type="submit" className="absolute inset-y-0 right-0 md:hidden flex items-center justify-center px-5 bg-primary hover:bg-opacity-90 rounded-r-[10px]" onClick={() => setShowInterface(false)}>
            <span className="font-semibold text-center lg:text-sm text-xs text-white">Go</span>
          </button>
        </div>
        <SearchFilter 
          searchResults={searchResults}
          searchTerm={searchTerm}
          className="flex md:hidden"
        />
      </div>


        {/*for tablets and larger screens*/}
      <button type="submit" className="absolute inset-y-0 right-0 hidden md:flex items-center justify-center lg:px-3 md:px-2 px-1 bg-primary hover:bg-opacity-90 rounded-r-[10px]">
        <span className="font-medium text-center lg:text-sm text-xs text-white">Go</span>
      </button>


      <SearchFilter 
        searchResults={searchResults}
        searchTerm={searchTerm}
        className="md:flex hidden absolute"
      />
     
    </form>
  );
};

export default SearchBar;
