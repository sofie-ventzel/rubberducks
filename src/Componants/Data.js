import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LocationInput } from "./LocationInput";

const styles = {
  longButton: {
    width: "100%",
    display: "flex",
    marginTop: "3%",
    marginBottom: "7%",
    textAlign: "center",
  },
  success: {
    textAlign: "center",
    marginTop: "3%",
    marginBottom: "7%",
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.856)",
  },
};

function Data() {
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    access_key: "768890a2-5b57-4e66-bb0c-417cd8996993",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const accessKey = "768890a2-5b57-4e66-bb0c-417cd8996993";
    const data = JSON.stringify(formData);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000).catch((err) => console.log(err));
  };

  return (
    <div>
      <p>
        We use a 3rd party for gathering your form submission data, to review
        their data policies visit the below link
      </p>

      <NavLink to="https://web3forms.com/">
        <button>Web3forms</button>
      </NavLink>

      <form>
        <input
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Blogger name will appear on site"
        />
        <input
          name="email"
          onChange={handleChange}
          type="text"
          placeholder="Your Email Address"
        />
        <textarea
          name="message"
          onChange={handleChange}
          placeholder="Enter a sighting including lat and log data....."
          cols="30"
          rows="10"
        ></textarea>
        <LocationInput onChange={handleChange} />
        <button onClick={handleSubmit} style={styles.longButton}>
          Submit
        </button>
      </form>

      {success && <p style={styles.success}>Form Submitted Successfully</p>}
    </div>
  );
}

export default Data;
