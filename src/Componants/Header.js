import { NavLink } from "react-router-dom";
function Header(props) {
  return (
    <header>
      <section>
        <img
          style={{ width: "10%", height: "auto", margin: "0 4%" }}
          src="/UntitledTwo.png"
          alt="Yellow duck"
        />
        <a className="text-black visited:text-black" href="/">
          <h1 style={{ fontSize: "35px" }}>RubberDucks </h1>
        </a>
        <nav style={{ flexDirection: "column", margin: "0 4%" }}>
          <NavLink
            style={{ fontWeight: "600", color: "black" }}
            className="hover:text-lg"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={{ fontWeight: "600", color: "black" }}
            className="hover:text-lg"
            to="/search"
          >
            Search
          </NavLink>
          <NavLink
            style={{ fontWeight: "600", color: "black" }}
            className="hover:text-lg"
            to="/form"
          >
            Post
          </NavLink>
          <NavLink
            style={{ fontWeight: "600", color: "black" }}
            className="hover:text-lg"
            to="/HowTo"
          >
            How To Birdwatch
          </NavLink>
          <NavLink
            style={{ fontWeight: "600", color: "black" }}
            className="hover:text-lg"
            to="/Moderator"
          >
            Moderate
          </NavLink>
        </nav>
      </section>
    </header>
  );
}
export default Header;
