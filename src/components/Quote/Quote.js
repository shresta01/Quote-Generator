import React from 'react';
const Quote = ({ quote, author }) => {
    return(
        <div>
            <p>"{quote}"</p>
            <p>-{author}</p>
        </div>
    );
};
export default Quote;
