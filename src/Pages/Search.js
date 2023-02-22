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

            <div style={styles.div}>
                <img style={styles.image} class="hover:animate-bounce" src="/UntitledTwo.png" alt="Yellow duck" />
                <img style={styles.image} src="/Untitled.png" alt="Yellow duck" />
                <img style={styles.image} class="hover:animate-bounce" src="/UntitledTwo.png" alt="Yellow duck" />
            </div>

            <Footer />
        </div>

    )
}


export default Search