import React from "react";

import "./Curriculo.css";
import data from "./Curriculo.json";

function Curriculo() {
    return (
        <main>
            <section>
             <h2>Objetivo</h2>
             <p style= {{textAlign:"left"}}>{data.objetivo}</p>
        </section>
        
        <section>
             <h2>Formação</h2>
            <ul style= {{textAlign:"left"}}>
                {data.formacao.map((item, index) => (
                    <li key={index}>
                <b>({item.dataInicio} - {item.dataFim})</b>{item.titulo}
                </li>
                ))}
            </ul>
        </section>

        <section>
             <h2>Experiência Profissional</h2>
             <ul style= {{textAlign:"left"}}>
             {data.experienciaProfissional.map((item, index) => (
                    <li key={index}>
                <b>({item.dataInicio} - {item.dataFim})</b>{item.titulo}
                </li>
                ))}
            </ul>
        </section>
        </main>
        
    )
}

export default Curriculo;