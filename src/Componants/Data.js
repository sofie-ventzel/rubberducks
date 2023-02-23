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
    color: 'brown',
    fontWeight: 'bold'
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
    birdName: "",
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
        <button style={{ color: 'brown' }}>Web3forms</button>
      </NavLink>

      <p>Tip: Use Browser Location on site, screenshot this and then add the location to your
        post description when you get home so you can really report the essence of the moment!</p>
      <form>
        <input
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Blogger name will appear on site"
        />
        <input
          name="birdName"
          onChange={handleChange}
          type="text"
          placeholder="What bird did you spot"
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
          placeholder="Enter a sighting if you have an image/video provide a gdrive shareable link to us"
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
