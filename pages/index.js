
import React from 'react';

const CardCreation = () => {
    return (
        <div>
            <h2>Create a Farewell Card</h2>
            <form 
                name="create-card" 
                method="POST" 
                data-netlify="true"
                action="/Success"
                // netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value="create-card" />
                
                {/* Bot-field for spam protection */}
                <p className="hidden">
                    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                </p>

                <p>
                    <label>Recipient Name: <input type="text" name="recipient" required /></label>
                </p>
                <p>
                    <label>Card Template URL: <input type="text" name="template-url" required /></label>
                </p>

                <button type="submit">Create Card</button>
            </form>
        </div>
    );
};

export default CardCreation;
