import { useState } from "react"
import { NavLink } from "react-router-dom"

const styles = {
    longButton: {
        width: '100%',
        display: 'flex',
        marginTop: '3%',
        marginBottom: '7%',
        textAlign: 'center',
        color: 'brown',
        fontWeight: 'bold'

    },
    success: {
        textAlign: 'center',
        marginTop: '3%',
        marginBottom: '7%',
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.856)'
    }

}

function ModeratorData() {
    const [success, setSuccess] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        access_key: '768890a2-5b57-4e66-bb0c-417cd8996993'
    })

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value

        })

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const accessKey = '768890a2-5b57-4e66-bb0c-417cd8996993'
        const data = JSON.stringify(formData);

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: data
        }).then(res => res.json())
            .then(data => console.log(data))
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 3000)
            .catch(err => console.log(err))
    }

    return (
        <div>

            <h1 style={{ fontSize: '30px', marginBottom: '1%' }}> Become a Moderator</h1>

            <h2 style={{ marginBottom: '1%' }}> Moderators are key to what we do at RubberDucks.</h2>
            <h2 style={{ marginBottom: '1%' }}>  If you have some basic IT skills to update a simple system and time to spare please get in touch!</h2>

            <form>

                <input name="name" onChange={handleChange} type="text" placeholder="Enter Your Name" />
                <input name="email" onChange={handleChange} type="text" placeholder="Your Email Address" />
                <textarea name="message" onChange={handleChange} placeholder="Confirm you are willing to download a simple software and what avaliabilty you have and we will come back" cols="30" rows="10"></textarea>
                <button onClick={handleSubmit} style={styles.longButton}>Submit</button>

            </form>

            {success && <p style={styles.success}>Form Submitted Successfully</p>}

            <h2> Note:  Abuse of the moderator possition will not be tolerated.  Founder members have the right to refuse Moderator privalages!</h2>

            <h2>The below link is to the Moderator instruction Guide</h2>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '3%', marginBottom: '2%' }}>
                <NavLink style={{ width: '60%' }} to="https://docs.google.com/document/d/17nWmTL-wiekCt8XRieUGbXKcX444x_HIX23y9SufLOo">
                    <button style={{ width: '100%' }}>Google Doc Moderator Instructions</button>
                </NavLink>
            </div>
            <h2>Only approved Moderators will be able to access this drive link</h2>

        </div>

    )
}


export default ModeratorData;