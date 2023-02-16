// findings will present a map and some posts - images or videos of any sightings shared relating to that type of bird
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from "leaflet"
import Data from "../Moderation.json"


const markerIcon = new L.Icon({
    iconUrl: require("../Icon/duck.png"),
    iconSize: [30, 30]
})



function MapPlotting() {

    return (
        <div>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} id="map">
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {Data.map((post, i) => {
                    return (
                        <Marker key={`${post.name}-${i}`} position={post.latLon} icon={markerIcon}>
                            <Popup>
                                Locational Details:  {post.latLon[0]}, {post.latLon[1]}
                            </Popup>
                        </Marker>)
                })}


            </MapContainer>
        </div >
    )
}

export default MapPlotting;
