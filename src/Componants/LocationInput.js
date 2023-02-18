import { useEffect, useState } from "react";

export function LocationInput() {
  const [isUsingGeoLocation, setUsingGeoLocation] = useState(false);
  const [geoLocation, setGeoLocation] = useState(null);

  function handleCheck() {
    setUsingGeoLocation(!isUsingGeoLocation);
  }

  useEffect(() => {
    if (isUsingGeoLocation) {
      navigator.geolocation.getCurrentPosition(
        function success(position) {
          setGeoLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        function error(e) {
          console.error(e);
        }
      );
    }
  }, [isUsingGeoLocation]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <span>Use browser location</span>
        <input
          type="checkbox"
          checked={isUsingGeoLocation}
          onChange={handleCheck}
        />
      </div>

      {
        // TODO shall we the input, or make it uneditable
        // TODO delete this console.log
        console.log({ geoLocation })
      }
      <input
        type="text"
        name="lat_long"
        placeholder="Latitude Longitude input"
        value={geoLocation ? JSON.stringify(geoLocation) : ""}
        readOnly={true}
      />
      <input
        type="text"
        name="postcode"
        placeholder="Postcode"
        readOnly={isUsingGeoLocation}
      />
    </div>
  );
}
