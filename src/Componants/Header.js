import { NavLink } from "react-router-dom";
function Header(props) {

    const styles = {
        image: {

            width: '10%',
            height: 'auto',

        }
    }

    return (

        <header>

            <section>
                <img style={styles.image} src="/UntitledTwo.png" alt="Yellow duck" />
                <h1>RubberDucks</h1>
                <img style={styles.image} src="/Untitled.png" alt="Yellow duck" />
            </section>
            <h2>The Bird Enthusiasts Community Page</h2>
            <h2>{props.brand}</h2>

            <nav>
                <NavLink to="/">
                    <button>Home</button>
                </NavLink>
                <NavLink to="/search">
                    <button>Search a Species</button>
                </NavLink>
                <NavLink to="/form">
                    <button>Contribute a sighting</button>
                </NavLink>
            </nav>

        </header>

    )

}
export default Header;