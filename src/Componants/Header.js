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
            <h2>The Bird enthusiasts page</h2>
            <h2>{props.brand}</h2>

            <nav>
                <button onClick={() => props.setPage('home')}>Return Home</button>
                <button onClick={() => props.setPage('search')}>Search for a species</button>
                <button onClick={() => props.setPage('form')}>Submit a sighting</button>
            </nav>

        </header>

    )

}
export default Header;
