import React from "react";  

import "./Header.css";
import avatar from "../../assets/assets/avatar.jpg";


function Header() {
    return  (
        <header>
            <center>
            <img src={avatar} alt="avatar de Everton" /> <br></br>
            <strong> Olá! <br /> </strong>  
            <strong> Eu sou o Everton Diego <br /> Desenvolvedor de Software</strong>
            </center>
        </header>
    

    )
}

export default Header;
    
