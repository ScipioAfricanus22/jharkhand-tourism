import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const coords = {
  "Dassam Falls": [23.3056, 85.2794],
  "Baba Badhyanath Temple": [24.4872, 86.6921],
  "Dalma Hills": [22.7597, 86.1733],
};

const customMarker = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Component to change the map view when selectedDest changes
function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export default function MapPanel({ selectedDest }) {
  if (!selectedDest) return <div>Interactive Map View</div>;

  const position = coords[selectedDest.name] || [23.0, 85.0];

  return (
    <MapContainer center={position} zoom={13} style={{ height: "350px", width: "100%" }}>
      <ChangeView center={position} zoom={13} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customMarker}>
        <Popup>{selectedDest.name} - {selectedDest.district}</Popup>
      </Marker>
    </MapContainer>
  );
}
