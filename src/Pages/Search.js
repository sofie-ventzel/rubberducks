import Birds from "../Componants/Birds"
import Footer from "../Componants/Footer"
function Search(props) {

    const styles = {
        image: {

            width: '10%',
            height: 'auto',

        },
        div: {

            display: 'flex',
            flexDirection: 'row',

        }
    }
    return (
        <div>

            <Birds />

            <h2>Please add sightings of common and rare birds via the add a post page</h2>

            <img src="/RareBird.jpg" />

            <h2 style={{ margin: '1% 0' }}>If you see this bird please post a sighting</h2>

            <h2>The Wood Warbler is one of the rarest birds in Britain</h2>

            <div style={styles.div}>
                <img style={styles.image} className="hover:animate-bounce" src="/UntitledTwo.png" alt="Yellow duck" />
                <img style={styles.image} src="/Untitled.png" alt="Yellow duck" />
                <img style={styles.image} className="hover:animate-bounce" src="/UntitledTwo.png" alt="Yellow duck" />
            </div>

            <Footer />
        </div>

    )
}


export default Search