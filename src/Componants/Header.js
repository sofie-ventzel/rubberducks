import { NavLink } from "react-router-dom";
function Header(props) {

    return (

        <header>
            <section>
                <a href="/"><img style={{ width: '30%', height: 'auto', margin: '0 4%' }} src="/UntitledTwo.png" alt="Yellow duck" /></a>
                <h1 class="text-6xl text-darkRed">RubberDucks </h1>
                <nav style={{ flexDirection: 'column', margin: '0 4%' }}>
                    <NavLink class="font-bold hover:uppercase" to="/">
                        Home
                    </NavLink>
                    <NavLink class="font-bold hover:uppercase" to="/search">
                        Search
                    </NavLink>
                    <NavLink class="font-bold hover:uppercase" to="/form">
                        Post
                    </NavLink>
                    <NavLink class="font-bold hover:uppercase" to="/HowTo">
                        How To Birdwatch
                    </NavLink>
                    <NavLink class="font-bold hover:uppercase" to="/Moderator">
                        Moderate
                    </NavLink>
                </nav>
            </section>

        </header >
    )

}
export default Header;
