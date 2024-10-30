import React from 'react';
import Article from '../Article/Article.js';
import Section from '../Section/Section.js';

import './Main.css';

function Main()
{
    return(
        <main className="main">
            <Section />
            <Article />
        </main>
    );
}

export default Main;