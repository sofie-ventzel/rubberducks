import Data from "../BirdList.json"

const styles = {
    birdy: {

        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: '0 8px 5px'

    },

    child: {
        flex: '1 0 30%',
        margin: '3px',

    }
}

function Birds(props) {


    return (

        <div style={styles.birdy}>
            {Data.map((post) => {
                return (
                    <>
                        <nav onClick={() => props.setPage('birds')} style={styles.child} key={post.name}>{post.name}</nav>
                    </>
                )
            })}
        </div>)
}

export default Birds;