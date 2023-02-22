import { NavLink } from "react-router-dom";
function Header(props) {
  return (
    <header className="p-5">
      <section>
        <img
          style={{ width: "15%", height: "auto", margin: "0 4%" }}
          src="/UntitledTwo.png"
          alt="Yellow duck"
        />
        <a className="visited:text-darkRed" href="/">
          <h1 className="text-6xl text-darkRed" style={{ fontSize: "35px" }}>
            RubberDucks{" "}
          </h1>
        </a>
        <nav
          style={{
            width: "15%",
            height: "200px",
            flexDirection: "column",
            margin: "0 4%",
          }}
        >
          <NavLink
            style={{ fontWeight: "600", color: "black" }}
            className="hover:text-lg p-2"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={{ fontWeight: "600", color: "black" }}
            className="hover:text-lg p-2"
            to="/search"
          >
            Search
          </NavLink>
          <NavLink
            style={{ fontWeight: "600", color: "black" }}
            className="hover:text-lg p-2"
            to="/form"
          >
            Post
          </NavLink>
          <NavLink
            style={{ fontWeight: "600", color: "black" }}
            className="hover:text-lg p-2"
            to="/HowTo"
          >
            How To Birdwatch
          </NavLink>
          <NavLink
            style={{ fontWeight: "600", color: "black" }}
            className="hover:text-lg p-2"
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
