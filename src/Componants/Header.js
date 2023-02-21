import { NavLink } from "react-router-dom";
function Header(props) {

    return (

        <header>
            <section>
                <img style={{ width: '10%', height: 'auto', margin: '0 4%' }} class="hover:animate-bounce" src="/UntitledTwo.png" alt="Yellow duck" />
                <h1 style={{ fontSize: '35px' }}>RubberDucks </h1>
                <nav style={{ flexDirection: 'column', margin: '0 4%' }}>
                    <NavLink style={{ fontWeight: '600', color: 'black' }} class="hover:scale-150 active:scale-200" to="/">
                        Home
                    </NavLink>
                    <NavLink style={{ fontWeight: '600', color: 'black' }} class="hover:scale-150 active:scale-200" to="/search">
                        Search
                    </NavLink>
                    <NavLink style={{ fontWeight: '600', color: 'black' }} class="hover:scale-150 active:scale-200" to="/form">
                        Post
                    </NavLink>
                    <NavLink style={{ fontWeight: '600', color: 'black' }} class="hover:scale-150 active:scale-200" to="/HowTo">
                        How To Birdwatch
                    </NavLink>
                    <NavLink style={{ fontWeight: '600', color: 'black' }} class="hover:scale-150 active:scale-200" to="/Moderator">
                        Moderate
                    </NavLink>
                </nav>
            </section>

        </header >
    )

}
export default Header;
