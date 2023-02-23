import { NavLink } from "react-router-dom";
function Header(props) {
  return (
    <header>
      <section>
        <img
          style={{ width: "20%", height: "auto", margin: "1% 4%", alignSelf: 'center' }}
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
            flexDirection: "column",
            margin: "1% 4%",

          }}
        >
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
