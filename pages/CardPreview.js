
import React, { useEffect, useState } from 'react';

const CardPreview = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Fetch the signed messages from Netlify (via API or Forms dashboard)
        // For now, we'll mock this data.
        setMessages([
            { name: 'John', message: 'Best of luck!' },
            { name: 'Sarah', message: 'We will miss you!' },
        ]);
    }, []);

    return (
        <div>
            <h2>Farewell Card for [Recipient Name]</h2>
            <div className="card-messages">
                {messages.map((msg, index) => (
                    <div key={index} className="message">
                        <p><strong>{msg.name}:</strong> {msg.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardPreview;
