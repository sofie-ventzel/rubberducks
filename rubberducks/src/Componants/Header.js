function Header(props) {
    return (

        <header>

            <h2>RubberDucks</h2>
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
