// findings will present a map and some posts - images or videos of any sightings shared relating to that type of bird
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Data from "../Moderation.json";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const markerIcon = new L.Icon({
  iconUrl: require("../Icon/duck.png"),
  iconSize: [30, 30],
});

const style = {
  birdDetailP: {
    marginBottom: "0px",
  },
};

function MapPlotting() {
  const [birdData, setbirdData] = useState("");
  // pulling the state value and using the special function this filters out through the function only the selected bird which is then returned as a map pin
  const { state } = useLocation();
  const birds = state.birdName
    ? Data.filter(function (post) {
        return post.name === state.birdName;
      })
    : Data;

  let apiBirdName = "";
  let googleURL = "https://www.google.com/search?q=";
  const getAPIName = () => {
    console.log({ state });
    if (state.birdName.split(" ").length > 1) {
      apiBirdName =
        state.birdName.split(" ")[0] + "%20" + state.birdName.split(" ")[1];
    } else apiBirdName = state.birdName;
  };

  const googleBirdName = () => {
    getAPIName();
    if (state.birdName.split("'").length > 1) {
      apiBirdName =
        state.birdName.split("'")[0] + "%27" + state.birdName.split("'")[1];
      googleURL = googleURL + apiBirdName;
      console.log(googleURL);
    } else {
      googleURL = googleURL + apiBirdName;
    }
  };

  const birdDetail = () => {
    fetch(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${apiBirdName}&format=json&origin=*`,
      { headers: { "content-type": "application/json" } }
    )
      .then((res) => res.json())
      .then((data) => {
        setbirdData(data.query.search[0].snippet + "...");
      });
  };

  return (
    <div>
      <h1>{state.birdName}</h1>
      {googleBirdName()}
      {birdDetail()}

      <p
        className="birdDetailP"
        style={style.birdDetailP}
        dangerouslySetInnerHTML={{ __html: birdData }}
      ></p>
      <a className="text-rosyPink animate-pulse" href={googleURL}>
        Click here for more details
      </a>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={8}
        scrollWheelZoom={false}
        id="map"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {birds.map((post, i) => {
          return (
            <Marker
              key={`${post.name}-${i}`}
              position={post.latLon}
              icon={markerIcon}
            >
              <Popup>
                Locational Details: {post.latLon[0]}, {post.latLon[1]}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default MapPlotting;
