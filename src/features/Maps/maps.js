'use client'

import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default function Maps() {
  return (
    <div className='rounded-lg p-5 z-0' style={{ height: "500px", width: "100%", borderRadius: "10px"}}>
      <MapContainer
      className='rounded-md'
        style={{ height: "100%", width: "100%" }}
        center={[24.105098690537357, 90.10544295514084]}
        zoom={10}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[24.105098690537357, 90.10544295514084]}>
          <Popup className='z-0'>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
