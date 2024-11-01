import React from 'react';
import './Section.css';

function Section()
{
    return(
        <section>
            <section className="section">
                <div id="headersection">
                    <div id="title"><p>About Me</p></div>
                    <div className="redessociais">
                        <div id="github">Github</div>
                        <div id="linkedin">Linkedin</div>
                    </div>
                </div>
                <div id="descriptionsection">
                    <p>Me chamo João Vítor, um jovem de 26 anos, casado, com uma vida pautada por valores cristãos e guiada pelos ensinamentos da Bíblia Sagrada. Fã por esportes, filmes e séries de ficção científica, de heróis e de ação, games e tecnologia. Além dos hobbies, sou um homem conservador e de direita. Procuro abençoar e influenciar positivamente a vida das pessoas ao meu redor, sempre buscando transmitir os valores em que acredito.</p>
                </div>
                <div id="softsection"></div>
            </section>
            <section className="section2">
                <div className="projetos1">
                    <div id="projeto1"></div>
                    <div id="projeto2"></div>
                </div>
                <div className="projetos2">
                    <div id="projeto3"></div>
                    <div id="projeto4"></div>
                    <div id="projeto5"></div>
                </div>
            </section>
        </section>
    )
}

export default Section;