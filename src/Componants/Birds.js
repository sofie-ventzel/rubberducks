import { NavLink } from "react-router-dom";
import Select from 'react-select'
import Data from '../Pages/BirdOnly.json'
import { useState } from "react";

const options = Data


function Birds() {
    const [birdName, setBirdname] = useState("");

    const handleChange = (selected) => {
        setBirdname(selected.value)
    }

    return (
        <>
            <div style={{ position: 'relative', alignItems: 'stretch', width: '100%' }}>
                <div style={{ alignItems: 'stretch' }} >
                    <img style={{ flexDirection: 'JustifyContent', marginTop: '1%', marginBottom: '1%' }} src="/HomeImage.jpg" alt="Photo of 2 keen birdwatchers" />
                </div>
                <div style={{ display: 'flex', position: 'absolute', right: '20%', left: '20%', bottom: '15%', }}>
                    <div style={{ display: 'flex', flex: 'auto', opacity: '0.6' }}>
                        <Select onChange={handleChange} placeholder="Start typing then select your bird" options={options} styles={{ width: 'maxwidth', opacity: '0.5' }} />
                        <NavLink to="/findings"
                            // the selected bird becomes a state variable which can be called to any sheet this will be called on for Mapping and Blog post componants
                            state={{ birdName: post.name }}>
                            <button style={styles.child} class="hover:bg-warmOrange active:bg-rosyPink">{post.name}</button>
                        </NavLink>
                    </div>
                </div>
                <div style={{ flexDirection: 'row' }}>
                    <img style={{ width: '10%', height: 'auto' }} src="/Untitled.png" alt="Yellow duck" />
                    <img style={{ width: '10%', height: 'auto' }} src="/Untitled.png" alt="Yellow duck" />
                    <img style={{ width: '10%', height: 'auto' }} src="/Untitled.png" alt="Yellow duck" />
                    <img style={{ width: '10%', height: 'auto' }} src="/Goose.png" alt="Goose" />
                    <img style={{ width: '10%', height: 'auto' }} src="/Untitled.png" alt="Yellow duck" />
                    <img style={{ width: '10%', height: 'auto' }} src="/Untitled.png" alt="Yellow duck" />
                    <img style={{ width: '10%', height: 'auto' }} src="/Untitled.png" alt="Yellow duck" />
                </div>
            </div>
        </>

    )
}

export default Birds;