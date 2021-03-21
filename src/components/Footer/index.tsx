import React from 'react';



const Footer: React.FC = () => {
    const today = new Date()
    const year = today.getFullYear();
    return ( 
        <footer> 
       
            <p>&copy; Cubo for Devs { year } | Gama Academy</p>

        </footer>
    );
}

export default Footer;