import React, {useState} from 'react'
import { Jumbotron, Container } from 'reactstrap';

function Contact() {
    const [errorMessage, setErrorMessage] = useState('');

    const [formState, setFormState] = useState({ name: '', email:'', message: '' });

    const { name, email, message } = formState;
    // Validate those emails.
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    // handle changes to the text inputs and check to see if they're empy an or valid
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
        const tar = e.target.value
        if (!tar.length) {
            setErrorMessage(`${e.target.name} is required`)
        } else if (e.target.name === "email") {
            const isValid = validateEmail(tar);
            if (!isValid) {
                setErrorMessage(`${e.target.name} is not a valid address`)
            }
        }
    }
    // half finished submit button since this site is not connected to a server that would log the submit to a database.
    function handleSubmit(e) {
        e.preventDefault();
    
        console.log(formState)
    }
    // basic bootstrap enabled form
    return(
        <section>
            <Jumbotron className="contact">
                <Container>
                    <h1 className="display-3 text-white">Contact Me</h1>
                </Container>
            </Jumbotron>
            <div className="container text-white">
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className="form-control my-2" onBlur={handleChange} defaultChecked={name}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email address:</label>
                        <input type="email" name="email" className="form-control my-2" onBlur={handleChange} defaultChecked={email}/>
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" rows="5" className="form-control my-2" onBlur={handleChange} defaultChecked={message}/>
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="alert alert-danger">{errorMessage}</p>
                        </div>
                    )}
                    <button type="submit" data-testid="submit" className="btn btn-primary my-2">Submit</button>
                </form>
            </div>
        </section>            
    )
}

export default Contact;