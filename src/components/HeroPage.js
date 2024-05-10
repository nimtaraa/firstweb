import React from 'react';
import './HeroPage.css'; 
import { Button } from 'react-bootstrap';
import HeroImage from '../sources/Illustration.png';
import Logo1 from '../sources/Logo(1).png'; 
import Logo2 from '../sources/Logo(2).png';
import Logo3 from '../sources/Logo(3).png';
import Logo4 from '../sources/Logo(4).png';
import Logo5 from '../sources/Logo(5).png';
import Logo6 from '../sources/Logo(6).png';
import Logo7 from '../sources/Logo(7).png';

function HeroPage() {
    return (
        <div>
        <div className="hero-container">
            <div className="text-container" style={{ fontFamily: 'Inter, sans-serif', textAlign:'left'}}>
                <h1 style={{fontWeight:'bold',fontSize:'62.55px', }}>Lessons and insights<br/>
                 <span style={{color:'#4CAF4F'}}>from 8 years</span></h1>
                 <p style={{ fontWeight: 600,fontSize:'17.14px',color:'#717171'}}>Where to grow your business as a photographer: site or social media?</p>
                 <Button variant="success"style={{fontSize:'13.14px',minWidth:'96.55px',minHeight:'46.49px',backgroundColor:'#4CAF4F',borderColor:'#4CAF4F',}}>Register</Button>
           
            </div>
            <div className="image-container">
                <img src={HeroImage} alt="Hero Image" />
            </div>
            <br></br>
            
        </div>
    <div className='client' style={{fontFamily:'Inter, sans-serif'}}>
    <div className="topic">
        <h2 style={{fontSize:33,color:'#4D4D4D'}}>Our Clients</h2>
        <p style={{fontSize:14,color:'#717171'}}>We have been working with some Fortune 500+ clients</p>
        </div>
    <div className="logos-container">
        <img src={Logo1} alt="Logo 1" className="logo" />
        <img src={Logo2} alt="Logo 2" className="logo" />
        <img src={Logo3} alt="Logo 3" className="logo" />
        <img src={Logo4} alt="Logo 4" className="logo" />
        <img src={Logo5} alt="Logo 5" className="logo" />
        <img src={Logo6} alt="Logo 6" className="logo" />
        <img src={Logo7} alt="Logo 7" className="logo" />
    </div>
    </div>
</div>
    );
}

export default HeroPage;
