import React, { useState } from "react";

import './Contato.css'

    function Contato() {
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [tel, setTel] = useState("");
        const [message, setMessage] = useState("");

        function enviarFormulario(event) {
            event.preventDefault();
            
            console.log ("Formulario enviado")

            const texto = `Nome: ${name}, Email: ${email}, Telefone: ${tel}, Mensagem: ${message}`;

            const numeroWhatsApp = import.meta.env.VITE_WHATSAPP_NUMBER; // número do WhatApp para o qual a mensagem será enviada//
            
            const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

            window.open(linkWhatsApp, "_blank");
        }       

    return (
        <form onSubmit={enviarFormulario}>

            <fieldset>
                <label htmlFor="input-name">Nome</label>
                <input type="text" 
                    name="input-name" 
                    id="input-name" 
                    required 
                    minLength="2" 
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </fieldset>

            <fieldset>
                <label htmlFor="input-email">Email</label>
                <input type="email" 
                    name="input-email" 
                    id="input-email" 
                    required 
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                /> 
            </fieldset>

            <fieldset>
                <label htmlFor="input-tel">Telefone</label>
                <input type="tel" 
                    name="input-tel" 
                    id="input-tel" 
                    placeholder="(99) 99999-9999" 
                    required 
                    pattern="^[(][0-9]{2}[)]\s[9]{1}[0-9]{4}-[0-9]{4}$"
                    value={tel}
                    onChange={(event) => setTel(event.target.value)}
                />
            </fieldset>

            <fieldset>
                <label htmlFor="input-mensagem">Mensagem</label>
                <textarea 
                    name="input-mensagem" 
                    id="input-mensagem" 
                    cols="30" 
                    rows="10"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}       
                    ></textarea>
            </fieldset>
            
            <center>
            <input type="submit" value="ENVIAR" className="buton" />
            </center>  
         
    </form>  
    )
       
}

export default Contato;
