import React from 'react';

function Com({ text1,text2, imageUrl }) {
    return (
        <div className="dynamic-component">
            <img src={imageUrl} style={{width:'50px',height:'50px'}} alt="Dynamic Image" />
            <h3>{text1}</h3>
            <p>{text2}</p>
        </div>
    );
}

export default Com;
