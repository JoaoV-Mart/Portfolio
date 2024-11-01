import React from 'react';
import './Section.css';

function Section()
{
    return(
        <section>
            <section className="section">
                <div id="headersection">
                    <div id="title"><p>Sobre mim</p></div>
                    <div className="redessociais">
                        <div id="github"><a href="https://github.com/JoaoV-Mart" target="_blank">Github</a></div>
                        <div id="linkedin"><a href="https://www.linkedin.com/in/jo%C3%A3o-v%C3%ADtor-97bab9256/" target="_blank" >Linkedin</a></div>
                    </div>
                </div>
                <div id="descriptionsection">
                    <p>Prazer, me chamo <strong>João</strong>, tenho 26 anos e sou casado com a Ana Paula. Procuro ter uma vida guiada pelos ensinamentos da Bíblia buscando influenciar positivamente a vida das pessoas ao meu redor. Sou fã de esportes, filmes e séries de ficção científica, de heróis e de ação, games e tecnologia.</p>
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