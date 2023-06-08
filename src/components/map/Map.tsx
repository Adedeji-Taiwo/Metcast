import {useMemo, useContext, useEffect} from 'react';
import { MetCastContext, MetCastContextType } from '../../context/metcast.context';
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import { Pin, Popper } from './index';
import { useParams } from 'react-router-dom';
import { CITIES } from '../../constants/data';


const TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN



const Mapper = () => {
  const { selectedCity, setSelectedCity, popupInfo, setPopupInfo, setSearchTerm} = useContext(MetCastContext) as MetCastContextType;
  const { city: selectedCityParam } = useParams<{ city: string }>();
  


  // Update selectedCity state based on the URL param
  useEffect(() => {
    if (selectedCityParam) {
      const city = CITIES.find((c) => c.city.toLowerCase() === selectedCityParam);
      setSelectedCity(city || null);
      setPopupInfo(null)
    }
  }, [selectedCityParam, setPopupInfo, setSelectedCity]);

  
  //mark out selected city
  const pins = useMemo(() => {
    if (selectedCity) {
      return (
        <Marker
          key={`marker-${selectedCity.city}`}
          longitude={selectedCity.longitude}
          latitude={selectedCity.latitude}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(selectedCity);
            setSearchTerm('');
          }}
        >
          <Pin />
        </Marker>
      );
    } else {
      return null;
    }
  }, [selectedCity, setPopupInfo, setSearchTerm]);
  




  return (
    <>
      <Map
        initialViewState={{
          latitude: 40,
          longitude: -100,
          zoom: 0,
          bearing: 0,
          pitch: 0
        }}
        mapStyle="mapbox://styles/dhegyaino45/clhlltp1i01mt01pn4jx41pgr"
        mapboxAccessToken={TOKEN}
        onClick={() => {
          setSelectedCity(null);
          setPopupInfo(null);
        }}
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />

        {pins}

        {popupInfo && (
         <Popper />
        )}
      </Map>

    </>
  );
}


export default Mapper