/* eslint-disable react/jsx-no-undef */
import React from 'react';

import LogoGitHub from '../../assets/GitHub_Logo.png';
import LogoLinkedin from '../../assets/LI-Logo.svg.original.svg';
import LogoheadPhone from '../../assets/headphones.svg';

import './styles.css';

function Content() {
  return(
    <main id="container-content">

      <div className="social-media" >
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/GabrielRuivo" ><img className="img-github" src={LogoGitHub} alt="logo-github"/></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gabriel-r-437872115/" ><img className="img-linkedin" src={LogoLinkedin} alt="logo-linkedin"/></a>
      </div>

      <div className="projects-column-1">

        <div className="box-title-content">
          <span className="title-content" >My awesome projects</span>
          <span className="sub-title-content" >Aqui está alguns dos projetos que venho criando! </span>
          <button className="btn-download-cv" >Download cv</button>
        </div>

        <div className="box-first-project">

          <div id="content-box-first-project">

            <span className="letter-bg" >Player</span>
            <span className="icon-first-project" >
              <img className="icon-first-project" src={LogoheadPhone} alt="icon-headphone"/>
            </span>
            <span className="title-first-project" >Player</span>
            <span className="sub-title-first-project" >Nesse projeto criei um player ultilizando JS(ES6), HTML e CSS.</span>
            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://github.com/GabrielRuivo/player" 
              className="a-first-project" 
            >
              Learn more
            </a>

          </div>
        </div>
      </div>

      <div className="projects-column-2">

      <div className="box-second-project">

        <div id="content-box-first-project">

            <span className="letter-bg" >Player</span>
            <span className="icon-first-project" >
              <img className="icon-first-project" src={LogoheadPhone} alt="icon-headphone"/>
            </span>
            <span className="title-first-project" >Player</span>
            <span className="sub-title-first-project" >Nesse projeto criei um player ultilizando JS(ES6), HTML e CSS.</span>
            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://github.com/GabrielRuivo/player" 
              className="a-first-project" 
            >
              Learn more
            </a>

        </div>
      </div>

        <div className="box-first-project">

          <div id="content-box-first-project">

            <span className="letter-bg" >Player</span>
            <span className="icon-first-project" >
              <img className="icon-first-project" src={LogoheadPhone} alt="icon-headphone"/>
            </span>
            <span className="title-first-project" >Player</span>
            <span className="sub-title-first-project" >Nesse projeto criei um player ultilizando JS(ES6), HTML e CSS.</span>
            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://github.com/GabrielRuivo/player" 
              className="a-first-project" 
            >
              Learn more
            </a>

          </div>
        </div>
      </div>


    </main>
  );
}

export default Content;