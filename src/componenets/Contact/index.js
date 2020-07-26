import React, {useState} from 'react'
import { Jumbotron, Container } from 'reactstrap';

function Contact() {
    const [errorMessage, setErrorMessage] = useState('');

    const [formState, setFormState] = useState({ name: '', email:'', message: '' });

    const { name, email, message } = formState;

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
        const tar = e.target.value
        if (!tar.length) {
            setErrorMessage(`${e.target.name} is required`)
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    
        console.log(formState)
    }

    return(
        <section>
            <Jumbotron className="contact">
                <Container>
                    <h1 className="display-3 text-white">Contact Me</h1>
                </Container>
            </Jumbotron>
            <div className="container">
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