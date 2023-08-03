import "./App.css"
import logo from "./img/logo.svg"
import github from "./img/github.svg"
import linkedin from "./img/linkedin.png"
import git from "./img/git.svg"
import docker from "./img/docker.svg"
import express from "./img/express.svg"
import html from "./img/html.svg"
import css from "./img/css.svg"
import javascript from "./img/javascript.svg"
import react from "./img/react.svg"
import node from "./img/node.svg"
import mysql from "./img/mysql.svg"
import sequelize from "./img/sequelize.svg"
import imagemMain from "./img/imagem_main.png"
import Jump from 'react-reveal/Jump'
import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import projetos from "./dadosProjetos/dadosProjetos"

function App() {
  return (
    <div>
      <div id="navbar">
        <div id="divLogo">
          <img src={logo} alt="logo do site" />
        </div>
        <div id="divContato">
        <a href="https://www.linkedin.com/in/victor-ramos1/" target="_blank" rel="noopener noreferrer"><img src={linkedin} id="linkedin" alt="logo do site"/></a>
        <a href="https://www.github.com/victoramos1/" target="_blank" rel="noopener noreferrer"><img src={github} id="github" alt="logo do site" /></a>
        </div>
      </div>
      <div id="main">
        <Slide left>
          <div id="divTexto">
            <h5>Desenvolvedor Full-Stack</h5>
            <h1>Olá, eu sou <span style={{ color: '#03fc96', fontSize: '100px' }}>Victor</span></h1>
            <a href="https://drive.google.com/file/d/1lThUbmzrkV6ZZGC63iVy-yIuUVx49e1F/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button id="btn">Ver currículo</button></a>
          </div>
        </Slide>
        <Jump >
          <div id="divImagem">
            <img src={imagemMain} alt="logo do site" />
          </div>
        </Jump>
      </div>
      <div id="divSobre">
        <Zoom>
          <div id="divIcones">
            <img src={html} alt="logo do html" />
            <img src={css} alt="logo do css" />
            <img src={javascript} alt="logo do javascript" />
            <img src={react} alt="logo do react" />
            <img src={node} alt="logo do node" />
            <img src={express} alt="logo do express" />
            <img src={mysql} alt="logo do mysql" />
            <img src={sequelize} alt="logo do sequelize" />
            <img src={git} alt="logo do git" />
            <img src={docker} alt="logo do docker" />
          </div>
        </Zoom>
        <Zoom>
          <div id="divTextoSobre">
            <h3>Sobre</h3>
            <p>
              Sou um profissional entusiasmado em ingressar na área T.I. Com habilidades em HTML5, CSS3, JavaScript, React.js, Node.js, Express.js, MySQL, Sequelize, Git e Docker, estou buscando meu primeiro emprego nessa área. Estou pronto para aplicar meu aprendizado e contribuir para o sucesso de uma equipe de T.I. Tenho 31 anos e estou ansioso para enfrentar novos desafios.
            </p>
          </div>
        </Zoom>
      </div>
      <div id="divProjetos">
        <h3>Projetos</h3>
        {projetos.map((projeto, index) => (
          <div id="divProjeto" key={index}>
            <Fade left>
              <img src={projeto.capa}  id="imgProjeto" alt="logo do projeto" />
            </Fade>
            <Fade right>
              <div id="divInfo">
                <h3>{projeto.titulo}</h3>
                <ul>
                  {projeto.tecnologias.map((item, index) => (
                    <li><img src={item} alt="icone tecnologia usada" /></li>
                  ))}
                </ul>
                <p>{projeto.texto}</p>
                <div id="divBtn">
                  <a href={projeto.deploy} target="_blank" rel="noopener noreferrer"><button>Testar online</button></a>
                  <a href={projeto.github} target="_blank" rel="noopener noreferrer"><button>Github</button></a>
                </div>
              </div>
            </Fade>
          </div>
        ))}
      </div>
      <div id="rodape">
        <h3>Layout e código feitos por Victor Ramos</h3>
      </div>
    </div >
  );
}

export default App;
