import React from "react";
import EstruturaPagina from "../../componentes/EstruturaPagina";
import Mapa from "../../componentes/Mapa";
import "./estilo.css";

import medico1 from "../../img/medico01.png"
import medico2 from "../../img/medico02.png"
import medico3 from "../../img/medico03.png"

function Contato(){
    return(
        <EstruturaPagina>
            <div className="contato-container">
                <div className="contato-mapa">
                    <h2>Horários de atendimento</h2>
                    <p>Agende uma consulta pelos telefones: (11) 3642-3700</p>

                    <ul className="lista-medicos">
                        <li>
                            <img src= {medico1} alt="médico 01" />
                            <p>Dr. Hélio</p>
                            <p>Segundas, Quartas e Sextas das 09:00 às 16:00</p>
                        </li>
                        <li>
                            <img src= {medico2} alt="médico 02" />
                            <p>Dr. Carlos</p>
                            <p>Terças e Quintas das 13:00 às 18:00</p>
                        </li>
                        <li>
                            <img src= {medico3} alt="médico 03" />
                            <p>Dra. Suzana</p>
                            <p>Terças e Quintas e Sábados das 08:00 às 12:00</p>
                        </li>
                    </ul>
                </div>
                <div className="contato-mapa">
                    <h2 className="titulo-sessao">Onde estamo localizados?</h2>
                    <p>Rua bento Branco de Andrade Filho, 379</p>
                    <p>Santo Amaro, São Paulo - SP</p>
                    <p>CEP: 04757-000</p>
                    <Mapa />
                </div>
            </div>

        </EstruturaPagina>

    );
}

export default Contato;