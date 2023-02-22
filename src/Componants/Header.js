import { NavLink } from "react-router-dom";
function Header(props) {

    return (

        <header>
            <section>
                <a href="/"><img style={{ width: '30%', height: 'auto', margin: '0 4%' }} src="/UntitledTwo.png" alt="Yellow duck" /></a>
                <h1 style={{ fontSize: '35px' }}>RubberDucks </h1>
                <nav style={{ flexDirection: 'column', margin: '0 4%' }}>
                    <NavLink style={{ fontWeight: '600', color: 'black' }} class="hover:uppercase" to="/">
                        Home
                    </NavLink>
                    <NavLink style={{ fontWeight: '600', color: 'black' }} class="hover:uppercase" to="/search">
                        Search
                    </NavLink>
                    <NavLink style={{ fontWeight: '600', color: 'black' }} class="hover:uppercase" to="/form">
                        Post
                    </NavLink>
                    <NavLink style={{ fontWeight: '600', color: 'black' }} class="hover:uppercase" to="/HowTo">
                        How To Birdwatch
                    </NavLink>
                    <NavLink style={{ fontWeight: '600', color: 'black' }} class="hover:uppercase" to="/Moderator">
                        Moderate
                    </NavLink>
                </nav>
            </section>

        </header >
    )

}
export default Header;
