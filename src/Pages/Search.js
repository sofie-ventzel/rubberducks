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
<<<<<<< HEAD
            <img style={{ flexDirection: 'JustifyContent', marginTop: '1%', marginBottom: '1%' }} src="/HomeImage.jpg" alt="Photo of 2 keen birdwatchers" />

            <div style={styles.div}>
                <img style={styles.image} class="animate-bounce" src="/Untitled.png" alt="Yellow duck" />
                <img style={styles.image} class="animate-bounce" src="/Untitled.png" alt="Yellow duck" />
                <img style={styles.image} class="animate-bounce" src="/Untitled.png" alt="Yellow duck" />
                <img style={styles.image} class="animate-bounce" src="/Goose.png" alt="Goose" />
                <img style={styles.image} class="animate-bounce" src="/Untitled.png" alt="Yellow duck" />
                <img style={styles.image} class="animate-bounce" src="/Untitled.png" alt="Yellow duck" />
                <img style={styles.image} class="animate-bounce" src="/Untitled.png" alt="Yellow duck" />

            </div>
=======
>>>>>>> b2030b9fc407245a98a14f7e8fa54d6b8724fdb1

            <Birds />

            <h2 class="animate-pulse" >Please add sightings of common and rare birds via the add a post page</h2>

            <div style={styles.div}>
                <img style={styles.image} class="hover:animate-spin" src="/UntitledTwo.png" alt="Yellow duck" />
                <img style={styles.image} class="hover:animate-pulse" src="/Untitled.png" alt="Yellow duck" />
                <img style={styles.image} class="hover:animate-spin" src="/UntitledTwo.png" alt="Yellow duck" />
            </div>

            <Footer />
        </div>

    )
}


export default Search