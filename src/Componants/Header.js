import { NavLink } from "react-router-dom"
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
                <NavLink to="/">Return Home</NavLink>
                <NavLink to="/Search">Search</NavLink>
                <NavLink to="/Form">Submit a sighting</NavLink>
               
            </nav>

        </header>

    )

}
export default Header;
