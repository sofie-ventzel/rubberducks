import { NavLink } from "react-router-dom";
import Select from 'react-select'
import Data from '../Pages/BirdOnly.json'
import { useState } from "react";

const options = Data


function Birds() {
    const [birdName, setBirdName] = useState("");

    const handleChange = (selected) => {
        setBirdName(selected.name)
    }

    return (
        <>
            <div style={{ position: 'relative', alignItems: 'stretch', width: '100%' }} >
                <div style={{ alignItems: 'stretch' }} >
                    <img style={{ flexDirection: 'JustifyContent', marginTop: '1%', marginBottom: '1%' }} src="/HomeImage.jpg" alt="Photo of 2 keen birdwatchers" />
                </div>
                <div style={{ display: 'flex', position: 'absolute', right: '20%', left: '20%', bottom: '22%', }} className="mb-10">
                    <div className="flex-div" style={{ display: 'flex', flex: 'auto', opacity: '0.6', zIndex: 100 }}>
                        <Select className="flex-div" onChange={handleChange} placeholder="Start typing then select your bird" options={options} styles={{ width: 'maxwidth', opacity: '0.5' }} />
                        <NavLink to="/findings"
                            state={{ birdName }}
                            style={{ background: 'white', border: 'none', width: '100%', borderRadius: '0px', paddingTop: '0' }}>Press to submit your choice
                        </NavLink>
                    </div>
                </div>
                <div className="flex-div" style={{ margin: '2% 0', flexDirection: 'row' }}>
                    <img style={{ width: '10%', height: 'auto' }} className="animate-bounce" src="/Untitled.png" alt="Yellow duck" />
                    <img style={{ width: '10%', height: 'auto' }} className="animate-bounce hover:animate-none" src="/Untitled.png" alt="Yellow duck" />
                    <img style={{ width: '10%', height: 'auto' }} className="animate-bounce hover:animate-none" src="/Untitled.png" alt="Yellow duck" />
                    <img style={{ width: '10%', height: 'auto' }} className="animate-bounce hover:animate-none" src="/Goose.png" alt="Goose" />
                    <img style={{ width: '10%', height: 'auto' }} className="animate-bounce hover:animate-none" src="/Untitled.png" alt="Yellow duck" />
                    <img style={{ width: '10%', height: 'auto' }} className="animate-bounce hover:animate-none" src="/Untitled.png" alt="Yellow duck" />
                    <img style={{ width: '10%', height: 'auto' }} className="animate-bounce" src="/Untitled.png" alt="Yellow duck" />
                </div>
            </div>
        </>

    )
}

export default Birds;