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
                    <p>João Sou um jovem de 26 anos, casado, com uma vida pautada por valores cristãos e guiada pelos ensinamentos da Bíblia Sagrada. Apaixonado por esportes, ele mantém uma rotina ativa, dividindo seu tempo entre atividades físicas e momentos de lazer. Nos tempos livres, ele gosta de assistir filmes e séries, especialmente aqueles que trazem a atmosfera nostálgica dos anos 80, uma década que ele admira pela estética e pela cultura. Gamer e entusiasta de tecnologia, João também aproveita o tempo livre para jogar videogame, equilibrando modernidade com seu apreço por histórias em quadrinhos.
                    <br/>
                    Além dos hobbies, João é um homem conservador e de direita, sustentando princípios que refletem suas crenças e valores cristãos. Ele se dedica a abençoar e influenciar positivamente a vida das pessoas ao seu redor, sempre buscando transmitir os valores em que acredita. Admirador da natureza, ele encontra paz ao ar livre e valoriza momentos de contemplação e conexão com o mundo natural.</p>
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