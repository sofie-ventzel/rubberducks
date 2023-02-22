import { NavLink } from "react-router-dom";
function Header(props) {

    return (

        <header>
            <section className="columns-3">
                <a href="/"><img className="h-40 w-40" src="/UntitledTwo.png" alt="Yellow duck" /></a>
                <h1 className="text-6xl text-darkRed">RubberDucks </h1>
                <nav className="flex-col">
                    <NavLink className="font-bold hover:uppercase" to="/">
                        Home
                    </NavLink>
                    <NavLink className="font-bold hover:uppercase" to="/search">
                        Search
                    </NavLink>
                    <NavLink className="font-bold hover:uppercase" to="/form">
                        Post
                    </NavLink>
                    <NavLink className="font-bold hover:uppercase" to="/HowTo">
                        How To Birdwatch
                    </NavLink>
                    <NavLink className="font-bold hover:uppercase" to="/Moderator">
                        Moderate
                    </NavLink>
                </nav>
            </section>

        </header >
    )

}
export default Header;
