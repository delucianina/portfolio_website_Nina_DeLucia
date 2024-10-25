import axios from 'axios';
import {useState} from 'react';
import React from 'react';

// ANYTHING YOU DON'T EXPECT TO CHANGE SHOULD GO OUTSIDE THE FUNCTION 
const accessKey = '89d79f9c-7128-455a-8467-7afc6fb8cf00';
const url = 'https://api.web3forms.com/submit';
const initialState = {
    access_key: accessKey,
    subbject: 'New Submission Form from Portfolio Contact Form',
    full_name: '',
    email: '',
    message: ''
};


function ContactForm() {

    const [formData, setFormData] = useState(initialState);
    const [alertMessage, setAlertMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        await axios.post(url, formData);

        setAlertMessage('Your message has been received');

        setTimeout(() => {
            setAlertMessage('');
        }, 4000)
        
        setFormData({...initialState})
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            // USE SPREAD  
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    return (
        <form onSubmit={handleSubmit} id="contact">
            <h3 className="text-center" >Contact Me</h3>

            {/* THIS NEEDS TO BE CONDITIONALLY RENDERED. */}
            {/* Shorthand: */}
            {alertMessage && <p className="message">{alertMessage}</p>}
            

            <input type="hidden" name="access_key" value={accessKey} />
            <input type="hidden" name="subject" value="New Submission from Portfolio Contact Form"></input>

            <input onChange={handleInputChange} value={formData.full_name} name="full_name" type="text" placeholder="Enter your full name" required />
            <input onChange={handleInputChange} value={formData.email}name="email" type="email" placeholder="Enter your email" required />
            <textarea onChange={handleInputChange} value={formData.message}name="message" placeholder="Tell me something"></textarea>
            <button>Send</button>
        </form>
    )
}

export default ContactForm;

