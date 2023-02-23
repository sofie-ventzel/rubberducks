import { useLocation } from "react-router-dom"
import Data from "../Moderation.json"

function BlogsandMedia() {

    const styles = {
        container: {

            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            fontWeight: "bold",
            border: "solid",
            borderColor: 'grey',
            borderWidth: '1px'

        },
        wording: {
            display: 'flex',
            flexDirection: 'row',
            width: '50%',
            height: 'auto',

        },

        image: {
            width: '75%',
            marginLeft: 'auto',
            marginTop: '1%',
        },
        extraWording: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: 'auto',

        },
    }
    // pulling the state value and using the special function this filters out through the function only the selected bird which is then returned as the relevant blog posts
    const { state } = useLocation()
    const birds = state.birdName ? Data.filter(function (post) {
        return post.name === state.birdName
    }) : Data
    console.log({ birds })
    return (

        <article>
            {birds.length > 0 ? birds.map((post, i) => {
                return (
                    <section style={styles.container} key={`${post.name}-${i}`}>
                        <img style={styles.image} src={post.media} />
                        <p>Posted By: {post.contributor} </p>
                        <p>{post.comments}</p>
                        <div style={styles.extraWording}>
                        </div>
                    </section>

                )
                // if there are no sightings bird lenth above finds 0 and skips to the paragraph to confirm nothing found
            }) : <p style={{ fontWeight: 'bold' }}>No sightings reported so far, please add a sighting if you spot this bird! </p>}

        </article>


    )

}

export default BlogsandMedia;
