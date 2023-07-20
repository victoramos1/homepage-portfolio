import express from "../img/express.svg"
import html from "../img/html.svg"
import css from "../img/css.svg"
import javascript from "../img/javascript.svg"
import react from "../img/react.svg"
import node from "../img/node.svg"
import mysql from "../img/mysql.svg"
import sequelize from "../img/sequelize.svg"
import blog from "../img/blog.png"
import filmes from "../img/filmes.png"
import cep from "../img/cep.png"
import api from "../img/api.png"
import site from "../img/site.png"
import crud from "../img/crud.png"
import megasena from "../img/megasena.png"


let projetos = [
  {
    titulo: "Blog de Viagens",
    capa: blog,
    tecnologias: [
      react,
      html,
      css,
      javascript,
      node,
      express,
      sequelize,
      mysql
    ],
    texto: "Blog de viagens com sistema de autenticação de login com token JWT, Sessions, acesso de funções administrativas apenas com autenticação, além possibilidade de adicionar, editar e apagar artigos, que estão salvos no MySQL e possuem integração com o Sequelize",
    deploy: "https://victoramos1.github.io/frontend-blog/",
    github: "https://github.com/victoramos1/backend-blog"
  },
  {
    titulo: "Buscador de Filmes",
    capa: filmes,
    tecnologias: [
      react,
      html,
      css,
      javascript,
    ],
    texto: "Buscador de filmes integrado diretamente com a API do The Movie Database. Possibilidade de verificar informações do filme como custo, bilheteria, sinopse, nota, etc. Busque seus filmes favoritos na barra de busca",
    deploy: "https://victoramos1.github.io/buscador-filmes/",
    github: "https://github.com/victoramos1/buscador-filmes"
  },
  {
    titulo: "Busca-CEP",
    capa: cep,
    tecnologias: [
      react,
      html,
      css,
      javascript,
    ],
    texto: "Busca de CEP integrado diretamente com a API da Via CEP. Possui um sistema para validação e formatação de resultado, para garantir a informação correta para o(a) usuário(a)",
    deploy: "https://victoramos1.github.io/busca-cep/",
    github: "https://github.com/victoramos1/busca-cep"
  },
  {
    titulo: "API de Personagens Históricos",
    capa: api,
    tecnologias: [
      node,
      express,
      mysql,
      sequelize
    ],
    texto: "API projetada, que está online, para enviar dados através do metodo GET sobre personagens históricos da humanidade. Possibilidade de obter resultados gerais ou filtrados através da nacionalidade e ocupação",
    deploy: "#",
    github: "https://github.com/victoramos1/api-personagens-historicos"
  },
  {
    titulo: "Clone Homepage Starbucks",
    capa: site,
    tecnologias: [
      react,
      html,
      css,
      javascript
    ],
    texto: "Clonagem do frontend do site do Starbucks Brasil. Design feito o mais fiel possível com as informações encontradas inspecionando elementos do site e pesquisas na internet, como descobrir qual a fonte padrão aplicada no site",
    deploy: "https://victoramos1.github.io/clone-site-starbucks/",
    github: "https://github.com/victoramos1/clone-site-starbucks"
  },
  {
    titulo: "Lista de Tarefas - CRUD",
    capa: crud,
    tecnologias: [
      react,
      html,
      css,
      javascript
    ],
    texto: "CRUD clássco com criação, edição e exclusão das anotações realizadas. Possibilidade de riscar atividades concluídas, além do modal aberto quando é necessário editar algo",
    deploy: "https://victoramos1.github.io/lista-de-tarefas-crud/",
    github: "https://github.com/victoramos1/lista-de-tarefas-crud"
  },
  {
    titulo: "Gerador de Números Megasena",
    capa: megasena,
    tecnologias: [
      react,
      html,
      css,
      javascript
    ],
    texto: "Gerador de números para sorteios da Megasena, com números randômicos e resultado apresentado em forma crescente, sem a repetição e com estilo semelhante ao site oficial da Caixa Econômica Federal",
    deploy: "https://victoramos1.github.io/numeros-para-megasena/",
    github: "https://github.com/victoramos1/numeros-para-megasena"
  }
]

export default projetos