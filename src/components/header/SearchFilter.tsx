import { CitiesDataType } from '../../constants/data'


const SearchFilter = ({searchResults, searchTerm, className}:{searchResults: CitiesDataType[], searchTerm:string, className:string}) => {
    return (
    <div className={`${className} mt-2 overflow-auto whitespace-nowrap scrollbar-hide top-full inset-x-0 gap-2 w-full`}>
       {searchTerm && searchResults.length > 0 ? (
            searchResults.map((city) => (
                <p
                    key={city.city}
                    className="text-primary px-2 p-1 xl:text-xs lg:text-[10px] text-[8px] font-normal capitalize border border-[#cdd4df]  bg-primary-light rounded-2xl"
                >
                    {city.city}
                </p>
            ))
            ) : searchTerm && searchResults.length === 0 ? (
            <p className="text-primary px-2 p-1 xl:text-xs lg:text-[10px] text-[8px] font-normal capitalize border border-[#cdd4df]  bg-primary-light rounded-2xl">No Match</p>
            ) : null}
      </div>
  )
}

export default SearchFilter