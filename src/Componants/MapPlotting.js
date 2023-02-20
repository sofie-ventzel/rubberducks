// findings will present a map and some posts - images or videos of any sightings shared relating to that type of bird
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from "leaflet"
import Data from "../Moderation.json"
import { useLocation } from 'react-router-dom'
import { useState } from 'react'


const markerIcon = new L.Icon({
    iconUrl: require("../Icon/duck.png"),
    iconSize: [30, 30]
})




function MapPlotting() {
  const [birdData, setbirdData]=useState("")
    // pulling the state value and using the special function this filters out through the function only the selected bird which is then returned as a map pin
    const { state } = useLocation()
    const birds = state.birdName ? Data.filter(function (post) {
        return post.name === state.birdName
    }) : Data
    
    const apiBirdName = state.birdName.split(" ")[0]+"%20"+state.birdName.split(" ")[1]
    const birdDetail = ()=>{
        fetch(
            `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${apiBirdName}&format=json&origin=*`,
            { headers: { "content-type": "application/json" } }
          )
            .then((res) => res.json())
            .then((data) => {   
                console.log(data.query.search[0].snippet)           
                setbirdData( data.query.search[0].snippet)
            });
    }
    
   
    
    return (
        <div>
            <h1>{state.birdName}</h1>
            {birdDetail()}
            <p dangerouslySetInnerHTML={{__html:birdData}}/>

            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} id="map">
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {birds.map((post, i) => {
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
