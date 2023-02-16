import Data from "../BirdList.json"
import { NavLink } from 'react-router-dom'

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
            {Data.map((post, i) => {
                return (
                    <div style={styles.child} key={`${post.name}-${i}`}>
                        <NavLink to="/findings"
                            // the selected bird becomes a state variable which can be called to any sheet this will be called on for Mapping and Blog post componants
                            state={{ birdName: post.name }}>
                            <button style={styles.child}>{post.name}</button>
                        </NavLink>
                    </div>
                )
            })}
        </div>)
}

export default Birds;