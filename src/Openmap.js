import { MapContainer, TileLayer,Marker,Popup,Tooltip } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import React, { useEffect, useState } from 'react';
 import {icon} from 'leaflet';
 
const Openmap = ({data}) => {
  const position=[0,0];
  const [mapLoaded, setMapLoaded] = useState(false);
 
  useEffect(() => {
    setMapLoaded(true);
  }, []);
 
    const customIcon=new icon({
        iconUrl:require('./assets/MicrosoftTeams-image (2).png'),
        iconSize:[30,30]
    });
    
  return (
    <MapContainer center={position} zoom={2} scrollWheelZoom={false} style={{ height: "450px",width: '400px' }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
      { mapLoaded && data.map((hotel,index) => (
    <Marker position={{lat: hotel.latitude, lng: hotel.longitude}} icon={customIcon} key={index}>
      <Popup>{hotel.name}{", "} {hotel.address}</Popup>
      <Tooltip>{hotel.name}{", "} {hotel.address}</Tooltip>
    </Marker>
       ))}
  </MapContainer>
  )
}
 
export default Openmap