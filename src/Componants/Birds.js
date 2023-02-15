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
                        <NavLink to="/findings">
                            <button style={styles.child}>{post.name}</button>
                        </NavLink>
                    </div>
                )
            })}
        </div>)
}

export default Birds;