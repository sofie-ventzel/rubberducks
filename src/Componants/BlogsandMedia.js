import { useLocation } from "react-router-dom"
import Data from "../Moderation.json"

function BlogsandMedia() {

    const styles = {
        container: {

            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'

        },
        wording: {
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            height: 'auto',

        },

        image: {
            width: '50%',
            marginLeft: '2px',
        }
    }
    // pulling the state value and using the special function this filters out through the function only the selected bird which is then returned as the relevant blog posts
    const { state } = useLocation()
    const birds = state.birdName ? Data.filter(function (post) {
        return post.name === state.birdName
    }) : Data
    console.log({ birds })
    return (

        <div>
            {birds.length > 0 ? birds.map((post, i) => {
                return (
                    <div style={styles.container} key={`${post.name}-${i}`}>
                        <img style={styles.image} src={post.media} />
                        <div style={styles.wording}>
                            <p>Blog Description: {post.comments}</p>
                            <p>Posted by : {post.contributor}</p>
                        </div>
                    </div>
                )
                // if there are no sightings bird lenth above finds 0 and skips to the paragraph to confirm nothing found
            }) : <p>No sightings reported so far, please add a sighting if you spot this bird!</p>}

        </div>


    )

}

export default BlogsandMedia;
