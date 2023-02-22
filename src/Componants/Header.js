import { NavLink } from "react-router-dom";
function Header(props) {

    return (

        <header>
            <section>
                <img style={{ width: '10%', height: 'auto', margin: '0 4%' }} src="/UntitledTwo.png" alt="Yellow duck" />
                <h1 style={{ fontSize: '35px' }} class="">RubberDucks </h1>
                <nav style={{ flexDirection: 'column', margin: '0 4%' }}>
                    <NavLink style={{ fontWeight: '600', color: 'black' }} class="hover:text-lg" to="/">
                        Home
                    </NavLink>
                    <NavLink style={{ fontWeight: '600', color: 'black' }} class="hover:text-lg" to="/search">
                        Search
                    </NavLink>
                    <NavLink style={{ fontWeight: '600', color: 'black' }} class="hover:text-lg" to="/form">
                        Post
                    </NavLink>
                    <NavLink style={{ fontWeight: '600', color: 'black' }} class="hover:text-lg" to="/HowTo">
                        How To Birdwatch
                    </NavLink>
                    <NavLink style={{ fontWeight: '600', color: 'black' }} class="hover:text-lg" to="/Moderator">
                        Moderate
                    </NavLink>
                </nav>
            </section>

        </header >
    )

}
export default Header;
