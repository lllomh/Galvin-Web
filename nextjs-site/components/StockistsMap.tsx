'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface Stockist {
  name: string;
  location: string;
  lat: number;
  lng: number;
}

export default function StockistsMap({ stockists }: { stockists: Stockist[] }) {
  return (
    <MapContainer
      center={[53.4129, -8.2439]}
      zoom={7}
      scrollWheelZoom={false}
      className="w-full h-[500px] rounded-lg mb-8 border z-0"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      {stockists.map((stockist, index) => (
        <Marker key={index} position={[stockist.lat, stockist.lng]} icon={icon}>
          <Popup>
            <strong>{stockist.name}</strong>
            <br />
            {stockist.location}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
