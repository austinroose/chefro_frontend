import React from 'react';

const Footer = () => {
    return (
        <div style={{ display:"grid", gridTemplateColumns:"repeat(5, 1fr)", gridTemplateRows:"1fr", gap:"10px 20px", backgroundColor:"#8bc34a", color:"white", padding:"20px"}}>
                <div>
                    <h1 style={{fontSize:"20px"}}>Chefro</h1>
                    <p>Kuidas see töötab?</p>
                    <p>Soovid platvormiga liituda?</p>
                </div>
                <div>
                    <h1 style={{fontSize:"20px"}}>Meist</h1>
                    <p>Kontakt</p>
                    <p>FAQ</p>
                </div>
        </div>
    )
}

export default Footer;