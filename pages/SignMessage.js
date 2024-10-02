
import React from 'react';

const SignMessage = () => {
    return (
        <div>
            <h2>Sign the Farewell Card</h2>
            <form 
                name="sign-message" 
                method="POST" 
                data-netlify="true"
                action="/thank-you"
                netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value="sign-message" />

                <p className="hidden">
                    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                </p>

                <p>
                    <label>Your Name: <input type="text" name="name" required /></label>
                </p>
                <p>
                    <label>Message: <textarea name="message" required></textarea></label>
                </p>

                <button type="submit">Submit Message</button>
            </form>
        </div>
    );
};

export default SignMessage;
