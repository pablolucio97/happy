
## :bulb: Happy

### Happy é uma aplicação web/mobile que permite criar e visualizar orfanatos.

<p align="center">
  <img alt="APM" src="https://img.shields.io/apm/l/vim-mode"> <img alt="PyPI - Status" src="https://img.shields.io/pypi/status/Django">
</p>

![img](https://i.ibb.co/QcwKk1Z/smartmockups-kghx1cgt.png)

## :rocket: Tecnologias utilizadas:

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Typescript](https://www.typescriptlang.org/docs/)
* [NodeJs](https://nodejs.org/en/)
* [TypeORM](https://typeorm.io/#/)
* [Sqlite](https://www.sqlite.org/index.html)
* [Expo](https://docs.expo.io/)
* [Axios](https://github.com/axios/axios)
* [React Router Dom](https://reactrouter.com/web/guides/quick-start)
* [React Navigation](https://reactnavigation.org/)


A lista completa de tecnologias e bibliotecas externas pode ser visualizada nos arquivos package.json das pastas api, web e mobile.


## :wrench: Instalação

### 1) Clone este repositório
 git clone https://github.com/pablolucio97/happy

### 2) Navegue até a pasta api e execute os seguintes comandos:
 npm install
 
 npm run knex:migrate
 
 npm start

### 3) Entre na pasta web e execute os comandos:
 npm install


### 4) Entre na pasta mobile e execunte os comandos:
 yarn
 expo start

### Observações:
Não esqueça de mudar a baseURL de configuração do axios no arquivo `src/services/api.ts` das pastas web e mobile para seu IP local.

