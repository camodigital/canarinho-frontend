import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export type MapNavProps = {
  latitude?: number
  longitude?: number
}

const MapNav = ({
  latitude = -15.8068314,
  longitude = -47.9377032
}: MapNavProps) => (
  <MapContainer
    center={[latitude, longitude]}
    zoom={11}
    scrollWheelZoom={false}
    style={{ height: '100%', width: '100%' }}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[-15.829186, -47.9139588]}>
      <Popup>Escola Canarinho - Unidade Asa Sul - Asa Sul, Brasília - DF</Popup>
    </Marker>
    <Marker position={[-15.7611348, -47.8829727]}>
      <Popup>
        Escola Canarinho - Unidade Asa Norte - Asa Norte, Brasília - DF
      </Popup>
    </Marker>
  </MapContainer>
)

export default MapNav
