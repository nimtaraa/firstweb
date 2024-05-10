import React from 'react';
import './Community.css'; 

function Community() {
    return (
        <div className="community-container" style={{fontFamily: 'Inter, sans-serif'}}>
            <div className="community-heading">
                <h2 style={{color:'#4D4D4D'}}>Manage your entire community <br/>in a single system</h2>
            </div>
            <div className="community-description">
                <p style={{fontSize:14,color:'#717171'}}>Who is Nextcent suitable for?</p>
            </div>
            <div className="community-icons">
                <div className="icon">Icon 1</div>
                <div className="icon">Icon 2</div>
                <div className="icon">Icon 3</div>
            </div>
        </div>
    );
}

export default Community;
