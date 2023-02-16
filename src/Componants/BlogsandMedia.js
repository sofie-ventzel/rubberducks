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
            width: '20%',
        }
    }

    return (

        <div>
            {Data.map((post, i) => {
                return (
                    <div style={styles.container} key={`${post.name}-${i}`}>
                        <img style={styles.image} src={post.media} alt="Yellow duck" />
                        <div style={styles.wording}>
                            <p>Blog Description: {post.comments}</p>
                            <p>Posted by : {post.contributor}</p>
                        </div>
                    </div>
                )
            })}

        </div>


    )

}

export default BlogsandMedia;
