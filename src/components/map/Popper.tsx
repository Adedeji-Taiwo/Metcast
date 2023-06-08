import { useContext } from "react";
import { Popup } from "react-map-gl";
import { MetCastContext, MetCastContextType } from "../../context/metcast.context";
import { WeatherCard } from "./index";


const Popper = () => {
    const {popupInfo, setSelectedCity, setPopupInfo} = useContext(MetCastContext) as MetCastContextType;

  return (
    <Popup
    anchor="top"
    longitude={Number(popupInfo?.longitude)}
    latitude={Number(popupInfo?.latitude)}
    onClose={() =>  {
      setSelectedCity(null);
      setPopupInfo(null);
    }}
  >
    <div className="font-mulish flex flex-col justify-start items-start">
        <p className="flex items-center justify-between w-full">
            <span className="font-bold lg:text-lg text-base">{popupInfo?.city}</span>
            <a
            className="underline mr-3 outline-none"
            target="_new"
            href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${popupInfo?.city}`}
        >
            Wikipedia
        </a>
        </p>
    
        <p className=" flex items-center justify-start">
        <span><span className="font-semibold">Population: </span>{popupInfo?.population}</span>
        </p>
      
    </div>
    <WeatherCard />
    <img width="100%" className="rounded-md" src={popupInfo?.image} />
  </Popup>
  )
}

export default Popper