import { useEffect, useState } from "react";

export function LocationInput({ onChange }) {
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
    } else {
      setGeoLocation(null);
    }
  }, [isUsingGeoLocation]);

  const inputName = "lat_long";

  useEffect(() => {
    onChange({
      target: {
        name: inputName,
        value: JSON.stringify(geoLocation),
      },
    });
  }, [geoLocation]);

  return (
    <div className="flex-div">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center"
        }}
      >
        <span>Use browser location</span>
        <input
          type="checkbox"
          checked={isUsingGeoLocation}
          onChange={handleCheck}
        />
      </div>
      <input
        type="text"
        name={inputName}
        placeholder="Latitude Longitude input"
        value={geoLocation ? JSON.stringify(geoLocation) : ""}
        readOnly={true}
        onChange={onChange}
      />
      <input
        type="text"
        name="postcode"
        placeholder="Postcode"
        readOnly={isUsingGeoLocation}
        onChange={onChange}
      />
    </div>
  );
}
