import React, { useState, useEffect, useRef } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const MapComponent = () => {
  const [userLocation, setUserLocation] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
        },
        error => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <YMaps>
      <div>
        <button
          onClick={() => {
            if (userLocation && mapRef.current) {
              mapRef.current.setCenter(userLocation, 15);
            }
          }}
        >
          Показать мое местоположение
        </button>
        <Map
          defaultState={{ center: [43.125499, 131.905284], zoom: 20 }}
          instanceRef={mapRef} width = '100%' height= '1000px'
        >
          {userLocation && <Placemark geometry={userLocation} />}
        </Map>
      </div>
    </YMaps>
  );
};

export default MapComponent;


